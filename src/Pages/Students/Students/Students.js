import React, { useEffect, useState } from 'react';
import Student from '../Student/Student';

const Students = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/students')
        .then(res => res.json())
        .then(data => setStudents(data));
    })
    return (
        <div className='py-10 px-20 text-blue-300'>
            <h3 className='text-3xl font-bold'>Student list</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Phone</th>
                            <th>Class</th>
                            <th>Institute</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students.map((student, index) => <Student
                                key={student._id} 
                                student={student} 
                                Index={index}></Student>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Students;