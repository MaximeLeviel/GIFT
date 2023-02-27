package com.st2apr.gift.controller;

import com.st2apr.gift.model.Student;
import com.st2apr.gift.repository.StudentRepository;
import jakarta.ws.rs.*;

import java.util.List;

@Path("/students")
public class StudentController {

    final StudentRepository studentRepository = new StudentRepository();

    @GET()
    @Produces("text/plain")
    public List<Student> getAllStudents() {
        return studentRepository.findAllStudents();
    }

    @GET()
    @Path("/{id}")
    @Produces("text/plain")
    public Student getStudentById(@PathParam("id") int id) {
        return studentRepository.findById(id);
    }

    @POST
    public void createStudent() {
        System.out.println("Student created");
    }
}