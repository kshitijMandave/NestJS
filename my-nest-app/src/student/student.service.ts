/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
  private students = [
    { id: 1, name: 'Kshitij', age: 25 },
    { id: 2, name: 'Pratik', age: 24 },
  ];

  // @GET method for all the students
  getAllStudents() {
    return this.students;
  }

  // @GET method for specific user with ID
  getUserById(id: number) {
    const student = this.students.find((stu) => stu.id === id);
    if (!student) throw new NotFoundException('Student not Found');
    return student;
  }

  // @POST - to create new student
  createStudent(data: { name: string; age: number }) {
    const newStudent = {
      id: Date.now(),
      ...data,
    };
    this.students.push(newStudent);
    return newStudent;
  }

  // @PUT - To update the data
  updateStudent(id: number, data: { name: string; age: number }) {
    const index = this.students.findIndex((s) => s.id === id);
    if (index === -1) throw new NotFoundException('Student not found');
    this.students[index] = { id, ...data };
    return this.students[index];
  }
}
