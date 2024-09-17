import React from 'react';

const Tag = ({ tag, color }) => {
    return (



        <div
            className={`mb-4 p-2 ${color}`}
            style={{
                width: 'fit-content',

                borderRadius: '10px'
            }}
        >
            <span className="text-gray   text-sm">{tag}</span>
        </div>


    );
}

export default Tag;
