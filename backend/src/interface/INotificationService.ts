export interface INotificationService {
    sendNotification(recipient: string, content: string, subject?: string): Promise<void>;
}