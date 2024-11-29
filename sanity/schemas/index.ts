import { type SchemaTypeDefinition } from 'sanity'
import EventSchema from './event'
import ScheduleSchema from './schedule'
import SpeakerSchema from './speaker'
import WorkshopSchema from './workshop'
import ImagesSchema from './images'
export const schema: { types: SchemaTypeDefinition[] } = {
    types: [
        SpeakerSchema,
        WorkshopSchema,
        ScheduleSchema,
        EventSchema,
        ImagesSchema,
    ],
}
