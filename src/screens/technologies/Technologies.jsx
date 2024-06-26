import React from 'react';
import DevIcon from 'devicon-react-svg';
import './technologies.css'
import {techs} from '../../helpers/techs';
//import IconAngularjs from 'react-devicon/angularjs/original';
//import IconAmazonwebservices from 'react-devicon/amazonwebservices/original';


function Technologies() {
    return (
        <div className="technologies__container" id="technologies">
            <h1 style={{textAlign: 'center'}}>Tech Obsessions</h1>
            <div className="tech__cards__container">
                {techs.map((e, idx) => {
                    return (
                        <div key={idx} className="tech__card">
                            <DevIcon className="tech__icons" icon={e.iconName} />
                            <span style={{ margin: '5px', fontSize: '1.5rem'}}>{e.name}</span>
                        </div>
                    )
                })}
            </div>                
        </div>
    )
}

export default Technologies
