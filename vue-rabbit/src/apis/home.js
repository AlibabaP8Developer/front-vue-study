import httpInstance from "@/utils/app";

export function getBannerAPI() {
    return httpInstance({
        url: 'home/banner'
    })
}
