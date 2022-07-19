import React, { useEffect, useState } from 'react';

const Students = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/students')
        .then(res => res.json())
        .then(data => setStudents(data));
    })
    return (
        <div>
            
        </div>
    );
};

export default Students;