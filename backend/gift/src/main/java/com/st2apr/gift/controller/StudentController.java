package com.st2apr.gift.controller;

import com.st2apr.gift.model.Student;
import com.st2apr.gift.repository.StudentRepository;
import jakarta.ws.rs.*;
import java.util.List;

@Path("/students")
public class StudentController {

    final StudentRepository studentRepository = new StudentRepository();

    @GET()
    @Produces("application/json")
    public List<Student> getAllStudents() {
        return studentRepository.findAllStudents();
    }

    @GET()
    @Path("/{id}")
    @Produces("application/json")
    public Student getStudentById(@PathParam("id") int id) {
        return studentRepository.findById(id);
    }

    @POST
    @Consumes("application/json")
    public void createStudent(Student student) {
        studentRepository.create(student);
    }

    @PUT
    @Consumes("application/json")
    public void updateAllStudents(List<Student> students) {
        studentRepository.updateAll(students);
    }

    @PUT
    @Path("/{id}")
    @Consumes("application/json")
    public void updateStudent(Student student) {
        studentRepository.update(student);
    }
}