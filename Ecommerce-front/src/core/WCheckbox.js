import React, { useState, useEffect } from "react";

const Checkbox = ({ wcategories, handleFilters }) => {
    const [checked, setCheked] = useState([]);

    const handleToggle = c => () => {
        // return the first index or -1
        const currentWCategoryId = checked.indexOf(c);
        const newCheckedWCategoryId = [...checked];
        // if currently checked was not already in checked state > push
        // else pull/take off
        if (currentWCategoryId === -1) {
            newCheckedWCategoryId.push(c);
        } else {
            newCheckedWCategoryId.splice(currentWCategoryId, 1);
        }
        // console.log(newCheckedCategoryId);
        setCheked(newCheckedWCategoryId);
        handleFilters(newCheckedWCategoryId);
    };

    return wcategories.map((c, i) => (
        <li key={i} className="list-unstyled">
            <input
                onChange={handleToggle(c._id)}
                value={checked.indexOf(c._id === -1)}
                type="checkbox"
                className="form-check-input"
            />
            <label className="form-check-label">{c.name}</label>
        </li>
    ));
};

export default Checkbox;
