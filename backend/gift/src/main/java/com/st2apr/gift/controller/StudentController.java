package com.st2apr.gift.controller;

import com.st2apr.gift.model.Student;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;

@Path("/student")
public class StudentController {
    @POST
    public void createStudent() {
        System.out.println("Student created");
    }

    @GET()
    @Produces("text/plain")
    public Student getStudent(int id) {
        final Student student = new Student();
        student.setId(id);
        return student;
    }

}