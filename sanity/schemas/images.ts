import {type SchemaTypeDefinition} from 'sanity';

const schema: SchemaTypeDefinition = {
    name: 'gallery_images',
    type: 'document',
    title: 'Gallery Images',
    description: 'Upload the image to display in the gallery.',
    fields: [
        {
            name: 'image',
            type: 'image',
            title: 'Image',
            options: {
                hotspot: true
            },
            validation: Rule => Rule.required(),
        },
        {
            name: 'title',
            type: 'string',
            title: 'Image Title',
            description: 'Title for the image.',
            validation: Rule => Rule.required(),
        }
    ]
}

type asset = {
    url: string;
}

export interface Images {
    image: {
        asset: asset;
    }
}

export default schema;