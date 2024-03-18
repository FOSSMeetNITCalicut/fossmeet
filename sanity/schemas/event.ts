import { Image, type SchemaTypeDefinition } from 'sanity';

const schema: SchemaTypeDefinition = {
    name: 'event',
    type: 'document',
    title: 'Events',
    fields: [
        { name: 'name', type: 'string', title: 'Name' },
        { name: 'description', type: 'text' },
        { name: 'image', type: 'image' },
        {
            name: 'hosted_by', type: 'object', fields: [
                { name: 'name', type: 'string' },
                { name: 'logo', type: 'image' }
            ]
        }
    ]
}

export interface Event {
    name: string
    description: string
    image: Image
    hosted_by: {
        name: string
        logo: Image
    }
}

export default schema;