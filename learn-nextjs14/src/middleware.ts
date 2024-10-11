import {auth} from "@/auth";
import {NextRequest, NextResponse} from "next/server";


export async function middleware(req: NextRequest) {
    const token = "ㅁㄴㅇ";
    const publicPaths = ['/login']
    const isPublicPath = publicPaths.includes(req.nextUrl.pathname)

    if (isPublicPath && token) {
        return NextResponse.redirect(new URL('/', req.url))
    }

    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL('/login', req.url))
    }

    return NextResponse.next()
}