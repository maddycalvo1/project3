import React from 'react';

function Posts({summary, username, title, comment, date, park_Id}) {

	return (
		<div className='card-container'>

            <div className="card-content">

                <div className="card-title">
                    <h3> {title} </h3>
                </div>

                <div className="card-body">
                    <p> {body} </p>
                </div>

            </div>



        </div>
	)
}
