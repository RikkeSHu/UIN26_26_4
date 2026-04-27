export const client = createClient({
  projectId: 'io98db3i',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-01-01'
})

import { createClient } from '@sanity/client'