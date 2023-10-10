import React, { useState, useEffect } from 'react';

const LocationComponent = () => {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    // Function to ask for location permission
    const askForLocationPermission = () => {
      if (navigator.permissions) {
        navigator.permissions.query({ name: 'geolocation' })
          .then(permissionStatus => {
            if (permissionStatus.state === 'granted') {
              // Permission already granted
              alert('Location permission already granted!');
              retrieveUserLocation();
            } else {
              // Ask for permission
              const permissionGranted = window.confirm('This website wants to access your location. Allow?');
              if (permissionGranted) {
                retrieveUserLocation();
              } else {
                alert('Location permission denied.');
              }
            }
          })
          .catch(error => {
            // Handle errors
            console.error('Error checking location permission:', error);
          });
      } else {
        // Geolocation permissions not supported
        alert('Geolocation permissions not supported by your browser');
      }
    };

    // Function to retrieve user location
    const retrieveUserLocation = () => {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          // Successfully retrieved user's location
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });

          // Reverse geocoding to get the address
          const address = await reverseGeocode(latitude, longitude);
          console.log('User\'s address:', address);
        },
        (error) => {
          // Handle location error
          console.error('Error getting user location:', error.message);
        }
      );
    };

    // Call the function to ask for location permission
    askForLocationPermission();
  }, []); // Empty dependency array ensures this effect runs once on component mount

  // Function to perform reverse geocoding using OpenCage Geocoding API
// Function to perform reverse geocoding using OpenCage Geocoding API
const reverseGeocode = async (latitude, longitude) => {
    const apiKey = '69dc20a39ae2447fbb85259ed8976132';
    const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=69dc20a39ae2447fbb85259ed8976132`;
  
    try {
      console.log('API Request:', apiUrl); // Log the API request to the console
  
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log('API Response:', data); // Log the API response to the console
  
      const address = data.results[0].formatted;
      setUserLocation({address});
      return address;
    } catch (error) {
      console.error('Error in reverse geocoding:', error);
      return 'Could not retrieve address';
    }
  };
  

  return (
    <div style={{ position: 'fixed', top: 50, left: 0, padding: '10px' }}>
      {userLocation ? (
        <p style={{ fontWeight: 'bold', color: 'black', fontSize: '1.5em', position:'fixed', marginBottom:'2rem' }}>
          {/* User's location: {userLocation.latitude}, {userLocation.longitude}<br /> */}
          Address: {userLocation.address}
        </p>
      ) : (
        <p>Fetching user's location...</p>
      )}
    </div>
  );
};

export default LocationComponent;
