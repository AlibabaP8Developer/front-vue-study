import httpInstance from "@/utils/app";

export function getCategory() {
    return httpInstance({
        url: 'home/category/head'
    })
}
