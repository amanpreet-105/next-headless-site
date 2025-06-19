import { GET_POSTS_CURSOR } from './queries';
import { fetchGraphQL } from '@/lib/graphql-client';

export async function PreloadPostCursors(postsPerPage){
    
    let after= null;
    let hasNextPage = true;
    const cursors = [null];

    while(hasNextPage){
        
        const res = await fetchGraphQL( GET_POSTS_CURSOR ,{first: postsPerPage, after: after});
        const pageInfo =  res?.posts?.pageInfo;
        
        if(pageInfo?.hasNextPage){
            after = pageInfo.endCursor;
            cursors.push(after);
        }

        hasNextPage = pageInfo?.hasNextPage;
    }
    
    return cursors;
}