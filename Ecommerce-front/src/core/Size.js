import React, { Fragment, useState } from "react";


const Size = ({ history }) => (
    <div>
        <ul className="inline">
            <li>
              <button className="btn btn-outline-primary mt-2 mb-2">
                        S
                    </button>  
            </li>

            <li>
            <button className="btn btn-outline-primary mt-2 mb-2">
                        M
                    </button>
            </li>

            <li>
                <button className="btn btn-outline-primary mt-2 mb-2">
                        L
                    </button>
            </li>
  
        </ul>
    </div>
);

export default Size;
