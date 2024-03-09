import React from 'react'

export default function Card() {
    return (
        <div>
            <div class="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                <img src="https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFuZWVyJTIwdGlra2F8ZW58MHx8MHx8fDA%3D" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Go and Order Your Cravings</p>
                    <div class='container w-100'>
                        <select class='m2 h-100  bg-success rounded'>
                            {Array.from(Array(6), (e, iter) => {
                                return (
                                    <option key={iter + 1} value={iter + 1}>{iter + 1}</option>
                                )
                            })}
                        </select>

                        <select class='m-2 h-100  bg-success rounded'>
                            <option value='half'>Half</option>
                            <option value="Full">Full</option>

                        </select>
                        <div class="d-inline h-100 fs-5">
                            Total Price
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
