export type StudentInformation = {
    studentName: string;
    studentLastName: string;
    lista: number;
    profilePhoto: string;
};

export type GroupInformation = {
    groupName: string;
    teacher: string;
    description: string;
    profileImageUrl: string;
    imageUrl: string;
    students: StudentInformation[];
};