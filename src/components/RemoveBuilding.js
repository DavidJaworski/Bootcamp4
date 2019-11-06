import React from 'react';

export default ({data, selectedBuilding, onChange}) =>
 
    <button class="btn btn-primary" type="submit" key={selectedBuilding} onClick = {() => {
        for (var i = 0; i < data.length; i++) {
            if (data[i].id === selectedBuilding) {
                data.splice(i, 1);
            }
        }
        onChange(data)
    }}>
        Delete
    </button>