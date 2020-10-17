import Image from "../models/Image"

export default {
    render(image: Image){
        return {
            id: image.id,
            url: `http://10.0.0.5:3333/uploads/${image.path}`
        }
    },

    renderMany(images: Image[]){
        return images.map(img => this.render(img))
    }
}