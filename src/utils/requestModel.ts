import type { Source } from '@/types/SourceTypes.ts'
import { useSourcesStore } from '@/store/SourceStore.ts'
import { useQueryStore } from '@/store/QueryStore.ts'
import { useResponseStore } from '@/store/ResponseStore.ts'

interface RequestPayload {
  query: string;
  sources: Source[];
}

const runReasoner = async () => {
  console.log("runReasoner")
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const sources = useSourcesStore().sourceList
  const query = useQueryStore().query

  const requestPayload: RequestPayload = {
    sources: sources,
    query: query
  }

  const body = {body: JSON.stringify(requestPayload)}
  Object.assign(options, body)

  try {
    const response = await fetch(`${import.meta.env.VITE_MODEL_API_URL}/api/v1/reasoner`, options)
    const responseJSON = await response.json();
    useResponseStore().response = responseJSON.response.processed.clean_answer
  } catch (error) {
    console.error('Error:', error);
  } finally {

  }
}

export default runReasoner
