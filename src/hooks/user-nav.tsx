import { usePathname } from "next/navigation"

export const usePaths = () =>{
    const pathName = usePathname();
    const paths = pathName.split("/");
    let page = paths[paths.length - 1];
    return {page, pathName};
}