import platforms from '../Data/platforms.ts'


// interface Plaform{
//     id: number;
//     name: string;
//     slug: string;
// }
//

const usePlatforms = ()=> {
    return {data: platforms, isLoading: false, error: null}
}

export default usePlatforms
