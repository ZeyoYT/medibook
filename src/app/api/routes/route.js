import { removeRequestMeta } from "next/dist/server/request-meta"

const routes = {
    "user": [
        {
            "name": "home",
            "url": ""
        },
        {
            "name": "login",
            "url": ""
        },
        {
            "name": "hospital",
            "url": ""
        },
        {
            "name": "profile",
            "url": ""
        },
    ],
    "admin": [
        {
            "name": "dashboards",
            "url": ""
        },


    ]
}

export function GET(){
    return Response.json(routes)
}