import { removeRequestMeta } from "next/dist/server/request-meta"

const routes = {
    "user": [
        {
            "name": "home",
            "url": ""
        },
        {
            "name": "signin",
            "url": ""
        },
        {
            "name": "signup",
            "url": ""
        }
    ],
    "admin": [
        {
            "name": "home",
            "url": ""
        },
        {
            "name": "signin",
            "url": ""
        },
        {
            "name": "signup",
            "url": ""
        },
        {
            "name": "hospital",
            "url": ""
        },
        {
            "name": "requests",
            "url": ""
        },
        {
            "name": "records",
            "urls": ""
        }

    ]
}

export function GET(){
    return Response.json(routes)
}