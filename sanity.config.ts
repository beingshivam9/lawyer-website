import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './sanity/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'lawyer-cms',

  projectId: 'arstbd99',
  dataset: 'production',

  plugins: [deskTool()],  // ✅ correct

  schema: {
    types: schemaTypes,
  },
})