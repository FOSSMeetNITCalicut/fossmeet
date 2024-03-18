import { type SchemaTypeDefinition } from 'sanity'
import EventSchema from './event'
import ScheduleSchema from './schedule'
import SpeakerSchema from './speaker'
import WorkshopSchema from './workshop'
export const schema: { types: SchemaTypeDefinition[] } = {
    types: [
        SpeakerSchema,
        WorkshopSchema,
        ScheduleSchema,
        EventSchema
    ],
}
