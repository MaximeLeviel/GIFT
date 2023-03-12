package com.st2apr.gift.controller;

import com.st2apr.gift.session.Jwt;
import com.st2apr.gift.model.Student;
import com.st2apr.gift.repository.StudentRepository;

import jakarta.persistence.NoResultException;

import jakarta.ws.rs.*;
import java.util.List;

@Path("/students")
public class StudentController {

    final StudentRepository studentRepository = new StudentRepository();

    @GET()
    @Produces("application/json")
    public List<Student> getAllStudents(@HeaderParam("AuthToken") String token) {
        try {
            String userEmail = Jwt.getAuthenticatedUser(token);
            if (userEmail == null) {
                throw new NoResultException("Invalid AuthToken");
            } else {
                 return studentRepository.findAllStudents();
            }
        } catch (Exception e) {
            return null;
        }
    }

    @GET()
    @Path("/{id}")
    @Produces("application/json")
    public Student getStudentById(@PathParam("id") int id, @HeaderParam("AuthToken") String token) {

        try {
            String userEmail = Jwt.getAuthenticatedUser(token);
            if (userEmail == null) {
                throw new NoResultException("Invalid AuthToken");
            } else {
                return studentRepository.findById(id);
            }
        } catch (Exception e) {
            return null;
        }
    }

    @POST
    @Consumes("application/json")
    public void createStudent(Student student, @HeaderParam("AuthToken") String token) {
        try {
            String userEmail = Jwt.getAuthenticatedUser(token);
            if (userEmail == null) {
                throw new NoResultException("Invalid AuthToken");
            }

            studentRepository.create(student);

        } catch (Exception e) {
            return;
        }
    }

    @PUT
    @Consumes("application/json")
    public void updateAllStudents(List<Student> students, @HeaderParam("AuthToken") String token) {

        try {
            String userEmail = Jwt.getAuthenticatedUser(token);
            if (userEmail == null) {
                throw new NoResultException("Invalid AuthToken");
            }

            studentRepository.updateAll(students);

        } catch (NoResultException e) {
            return;
        }
    }

    @PUT
    @Path("/{id}")
    @Consumes("application/json")
    public void updateStudent(Student student, @HeaderParam("AuthToken") String token) {
        try {
            String userEmail = Jwt.getAuthenticatedUser(token);
            if (userEmail == null) {
                throw new NoResultException("Invalid AuthToken");
            }

            studentRepository.update(student);

        } catch (Exception e) {
            return;
        }
    }
}