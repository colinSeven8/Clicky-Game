import React from "react";
import Image from "../Image";

function ImageList(props) {

    imageClick = id => {
        const images = this.state.images.filter(image => image.id !== id);
        console.log(images);
        this.setState({ images });
    };

    randomizer = arr => {
        for (let i = 0; i < arr.length; i++) {
            const temp = arr[i];
            const j = Math.floor(Math.random() * (i + 1));
            arr[i] = arr[j];
            arr[j] = temp;
        }
        return arr;
    }

    let imageArray = this.state.images.map((image) => {
        imageClick = { this.imageClick }
        image = { image.image }
    });

    this.randomizer(imageArray);

    return (
        <ul className="list-group">
            {props.state.images.map(result => (
                <li className="list-group-item" key={result.id}>
                    <Image imageClick={result.imageClick} image={image.image} />
                </li>
            ))}
        </ul>
    );
}

export default ImageList;
