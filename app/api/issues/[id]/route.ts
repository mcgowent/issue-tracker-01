import { issueSchema } from "@/app/validationSchemas";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
    request: NextRequest, 
    {params}: { params: {id: string}}) {
    const body = await request.json();
    const validation = issueSchema.safeParse(body); // Validate the request body against the schema
    if(!validation.success) {
        return new Response(JSON.stringify(validation.error), {status: 400});
    }

    const issue = await prisma.issue.findUnique({
        where: { id: parseInt(params.id) }  // Find the issue by ID
    })

    if(!issue) {
        return NextResponse.json({error: "Invalid Issue"}, {status: 404});
    }

    const updatedIssue = await prisma.issue.update({
        where: { id: issue.id },
        data: {
            title: body.title,
            description: body.description,
            status: body.status,
        }
    })
    return NextResponse.json(updatedIssue, {status: 200});
}