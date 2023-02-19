import React from 'react';

const SectionTitle = ({children}: any) => {
    return (
        <h2 className='font-bold text-2xl mb-10'>
            {children}
        </h2>
    );
};

export default SectionTitle;