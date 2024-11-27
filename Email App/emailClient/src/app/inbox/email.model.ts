export interface EmailSummary{
    id: string,
    subject: string,
    from: string
}

export interface EmailByIdResponse{
    id: string,
    subject: string,
    text: string,
    to: string,
    from: string,
    html: string
}

export interface EmailSubmissionResponse{
    to: string,
    subject: string,
    text: string
}