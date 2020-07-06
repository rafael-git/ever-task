import React from 'react';
import PropTypes from 'prop-types';


import './HeadingText.scss';


const HeadingText = (props) => {
    return (
        <div className="u-margin-bottom-small">
            <h2 className="heading-secondary">
                {props.text}
            </h2>
        </div>
    );
}

HeadingText.propTypes = {
    text: PropTypes.string
}
export default HeadingText;
