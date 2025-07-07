export type StudentInformation = {
    studentName: string;
    studentLastName: string;
    lista: number;
    profilePhoto: string;
};

export enum Shift {
    Morning = "Morning",
    Evening = "Evening",
}

export type GroupInformation = {
    groupName: string;
    teacher: string;
    description: string;
    profileImageUrl: string;
    imageUrl: string;
    students: StudentInformation[];
    shift: Shift;
};