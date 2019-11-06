import React from 'react';

export default ({data, onChange}) =>
    <form onSubmit = {(e) => e.preventDefault()}>
        <div class="form-row">
            <div class="col-2">
                <input type="text" class="form-control" id="code" placeholder="Code"/>
            </div>
            <div class="col-8">
                <input type="text" class="form-control" id="name" placeholder="Name"/>
            </div>
        </div>
        <div class="form-row">
            <div class="col-10">
                <input type="text" class="form-control" id="address" placeholder="Address"/>
            </div>
        </div>
        <div class="form-row">
            <div class="col-5">
                <input type="text" class="form-control" id="latitude" placeholder="Latitude"/>
            </div>
            <div class="col-5">
                <input type="text" class="form-control" id="longitude" placeholder="Longitude"/>
            </div>
        </div>
        <button class="btn btn-primary" type="submit" onClick = {() => {
            data.unshift({
                id: data[data.length - 1].id + 1,
                code: document.getElementById("code").value,
                name: document.getElementById("name").value,
                address: document.getElementById("address").value,
                coordinates: {
                    latitude: document.getElementById("latitude").value,
                    longitude: document.getElementById("longitude").value
                }
            })
            onChange(data)
        }}>Add Building</button>
    </form>