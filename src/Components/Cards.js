import React from 'react';

export default function Cards() {
  return (
    <>
    <h2 style={{ textAlign: 'center', marginLeft:'5rem', marginTop:'5rem'}}>Hospitals Near You</h2>
    <div style={{display:'flex', textAlign:'center'}}>
      <div className="card" style={{ width: '35rem' , margin:'5rem',marginTop:'5rem'}}>
        <img className="card-img-top" src="hospital.jpg" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Hindu Mission Hospital</h5>
          <p className="card-text" style={{fontWeight:'600'}}>103, Grand Southern Trunk Rd, New Market, West Tambaram, Tambaram, Chennai, Tamil Nadu 600045</p>
          <a href="#" className="btn btn-danger">Call Ambulance</a>
        </div>
      </div>
      <div className="card" style={{ width: '35rem' , margin:'5rem', marginTop:'5rem'}}>
        <img className="card-img-top" src="hospital2.jpg" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">DR.KAMAKSHI MEMORIAL HOSPITALS</h5>
          <p className="card-text" style={{fontWeight:'600'}}> 200 Feet Radial Rd, Dandeeswarar Nagar, Rose Avenue, Pallikaranai, Chennai, Tamil Nadu 600100</p>
          <a href="#" className="btn btn-danger">Call Ambulance</a>
        </div>
      </div>
      <div className="card" style={{ width: '35rem' , margin:'5rem',marginTop:'5rem'}}>
        <img className="card-img-top" src="hospital3.jpg" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Lifeline Hospitals</h5>
          <p className="card-text" style={{fontWeight:'600'}}> 47/3, New Avadi Rd, Alagappa Nagar, Kilpauk, Chennai, Tamil Nadu 600010</p>
          <a href="#" className="btn btn-danger">Call Ambulance</a>
        </div>
      </div>
    </div>
    </>
  );
}
