import useData from "./useData.ts";


interface Plaform{
    id: number;
    name: string;
    slug: string;
}


const usePlatforms = ()=> useData<Plaform>('/platforms/lists/parents')

export default usePlatforms
