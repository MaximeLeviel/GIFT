package com.st2apr.gift;

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
    public StudentEntity getStudent(int id) {
        final var student = new StudentEntity();
        student.setId(id);
        return student;
    }

}
