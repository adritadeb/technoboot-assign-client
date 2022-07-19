import React from 'react';

const Student = ({student, index}) => {
    const {Roll, name, gender, phone, readingClass, Institute} = student;
    return (
            <tr>
                <td>{Roll}</td>
                <td>{name}</td>
                <td>{gender}</td>
                <td>{phone}</td>
                <td>{readingClass}</td>
                <td>{Institute}</td>
            </tr>
    );
};

export default Student;