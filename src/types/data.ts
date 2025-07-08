import { GroupInformation } from "./types";
import { StudentInformation } from "./types";
import { Shift } from "./types";

export const students: StudentInformation[] = [
    {
        studentName: "David",
        studentLastName: "Bernabe",
        lista: 4, 
        profilePhoto: "https://static.vecteezy.com/system/resources/previews/010/967/316/non_2x/avatar-bearded-man-free-vector.jpg",
    },
    {
        studentName: "Ximena",
        studentLastName: "Silva",
        lista: 5, 
        profilePhoto: "https://img.freepik.com/vector-premium/mujer-avatar-mujer-negocios_38295-63.jpg",
    }, 
    {
        studentName: "Ana Keila",
        studentLastName: "Martinez",
        lista: 6, 
        profilePhoto: "https://img.freepik.com/vector-premium/mujer-avatar-mujer-negocios_38295-63.jpg",
    }, 
];

export const students1: StudentInformation[] = [
    {
        studentName: "Pedro",
        studentLastName: "Bernabe",
        lista: 4, 
        profilePhoto: "https://static.vecteezy.com/system/resources/previews/010/967/316/non_2x/avatar-bearded-man-free-vector.jpg",
    },
    {
        studentName: "Karla",
        studentLastName: "Silva",
        lista: 5, 
        profilePhoto: "https://img.freepik.com/vector-premium/mujer-avatar-mujer-negocios_38295-63.jpg",
    }, 
    {
        studentName: "Ana",
        studentLastName: "Martinez",
        lista: 6, 
        profilePhoto: "https://img.freepik.com/vector-premium/mujer-avatar-mujer-negocios_38295-63.jpg",
    }, 
];

export const groups: GroupInformation[] = [
    {
        id: "1",
        groupName: "Clase-A",
        teacher: "Antonio Castro",
        description: "Este grupo es de 4to grado",
        imageUrl: "https://unibetas.com/wp-content/uploads/2022/01/que-estudia-la-quimica-como-ciencia-experimental.png",
        profileImageUrl: "https://static.vecteezy.com/system/resources/previews/010/967/316/non_2x/avatar-bearded-man-free-vector.jpg",
        students: students,
        shift: Shift.Morning,
    },
    {
        id: "2",
        groupName: "Clase-B",
        teacher: "Laura Castro",
        description: "Este grupo es de 4to grado",
        imageUrl: "https://elucabista.com/wp-content/uploads/2017/01/historia.jpg",
        profileImageUrl: "https://img.freepik.com/vector-premium/mujer-avatar-mujer-negocios_38295-63.jpg", 
        students: students1,
        shift: Shift.Evening,
    }, 
    {
        id: "3",
        groupName: "Clase-C",
        teacher: "Sonia Castro",
        description: "Este grupo es de 4to grado",
        imageUrl: "https://humanidades.com/wp-content/uploads/2017/07/geografia-1-e1571191539294-800x416.jpg",
        profileImageUrl: "https://img.freepik.com/vector-premium/mujer-avatar-mujer-negocios_38295-63.jpg", 
        students: students,
        shift: Shift.Morning,
    }, 
];