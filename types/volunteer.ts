export type Volunteer = {
    title: string;
    desc: string;
    image: string;
    projectId: number;
    raisedAmount: number | string;
    targetAmount: number | string;
    category: string;
    creator: string;
    deadline: number;
    location: string;
}