import React from 'react'
import { Route , Link } from 'react-router-dom';
import '../css/header.css'
class header extends React.Component {

    render() {

        const textStyles = {
            color: 'white',
            backgroundColor: 'black'
          }

        return (
            <div>
                <ul>
                    <Link to='/to' style={textStyles}>흐흐</Link>
                    <li style={textStyles}>111</li>
                    <Link to='/about'><li className="aaa">크크</li></Link>
                </ul>
            </div>
        )
    }
}

export default header;