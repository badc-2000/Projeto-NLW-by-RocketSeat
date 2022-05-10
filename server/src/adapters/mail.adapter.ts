export interface SendMailData {
    subject: string
    body: string
}

export interface MaildAdapter{
    sendMail: (data: SendMailData) => Promise<void>
}