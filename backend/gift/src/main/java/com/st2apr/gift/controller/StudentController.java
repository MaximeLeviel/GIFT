package com.st2apr.gift.controller;

import com.st2apr.gift.model.Student;
import com.st2apr.gift.repository.StudentRepository;
import jakarta.ws.rs.*;

@Path("/students")
public class StudentController {
    @POST
    public void createStudent() {
        System.out.println("Student created");
    }

    @GET()
    @Produces("text/plain")
    public Student getAllStudents() {
        return new Student();
    }

    @GET()
    @Path("/{id}")
    @Produces("text/plain")
    public Student getStudentById(@PathParam("id") int id) {
        final StudentRepository studentRepository = new StudentRepository();
        return studentRepository.findById(id);
    }

}