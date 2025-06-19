import { request } from 'graphql-request';

const endpoint = process.env.NEXT_PUBLIC_WP_BACKEND_API+'/graphql';

export async function fetchGraphQL(query, variables = {}) {
  return await request(endpoint, query, variables);
}
