import React from 'react';

export default function Button(props) {
    return (
        <button>
            {/* eslint-disable-next-line react/prop-types */}
            {props.children}
        </button>
    );
}