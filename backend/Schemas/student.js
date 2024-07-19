import z from 'zod';


const studentSchema = z.object({
    alumn_DNI:z.string().regex(/^\d{7,8}$/),
    nombre:z.string(),
    apellido:z.string(),
    asistencias:z.number().min(0),
    fecha_nac: z.string().refine(date => !isNaN(Date.parse(date)), {
        message: "Invalid date format"
    }),
    año: z.enum(['primero', 'segundo','tercero'])
});

export function validateStudent(object){
    return studentSchema.safeParse(object)
}