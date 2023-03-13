package com.st2apr.gift.controller;

import com.st2apr.gift.session.Jwt;
import com.st2apr.gift.model.SchoolTutor;
import com.st2apr.gift.repository.SchoolTutorRepository;
import com.st2apr.gift.session.Logindetails;
import jakarta.persistence.NoResultException;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.Response;


import java.util.List;

@Path("/schooltutors")
public class SchoolTutorController {

    final SchoolTutorRepository schoolTutorRepository = new SchoolTutorRepository();

    @GET()
    @Produces("application/json")
    public List<SchoolTutor> getAllTutors(@HeaderParam("AuthToken") String token) {
        try {
            String userEmail = Jwt.getAuthenticatedUser(token);
            if (userEmail == null) {
                throw new NoResultException("Invalid AuthToken");
            } else {
                return schoolTutorRepository.findAllTutors();
            }
        } catch (Exception e) {
            return null;
        }
    }

    @GET()
    @Path("/{id}")
    @Produces("application/json")
    public SchoolTutor findById(@PathParam("id") int id, @HeaderParam("AuthToken") String token) {
        try {
            String userEmail = Jwt.getAuthenticatedUser(token);
            if (userEmail == null) {
                throw new NoResultException("Invalid AuthToken");
            } else {
                return schoolTutorRepository.findById(id);
            }
        }  catch (Exception e) {
            return null;
        }
    }
    
    @POST
    @Consumes("application/json")
    public void createTutor(SchoolTutor schoolTutor, @HeaderParam("AuthToken") String token) {
        try {
            String userEmail = Jwt.getAuthenticatedUser(token);
            if (userEmail == null) {
                throw new NoResultException("Invalid AuthToken");
            }

            schoolTutorRepository.create(schoolTutor);

        } catch (Exception e) {
            return;
        }
    }


    @POST
    @Path("/login")
    @Consumes("application/json")
    @Produces("application/json")
    @HeaderParam("AuthToken")
    public Response login(Logindetails login, @HeaderParam("AuthToken") String authToken) {
        if (authToken != null) {
            return Response.status(200).entity("You are already logged in").build();
        }

        try {
            SchoolTutor tutor = schoolTutorRepository.findByEmail(login.email);
            if (tutor == null){
                throw new NoResultException("No tutors with that email");
            } else {
                if (login.password.equals(tutor.getPassword())) {
                    String token = Jwt.createJWT(login.email);
                    return Response.status(200).entity("You are successfully logged in").header("AuthToken", token).build();
                } else {
                    throw new NoResultException();
                }
            }
        } catch (NoResultException e) {
            return null;
        }
    }

    @PUT
    @Path("/{id}")
    @Consumes("application/json")
    public void updateTutor(SchoolTutor schoolTutor, @HeaderParam("AuthToken") String token) {

        try {
            String userEmail = Jwt.getAuthenticatedUser(token);
            if (userEmail == null) {
                throw new NoResultException("Invalid AuthToken");
            }

            schoolTutorRepository.update(schoolTutor);
        } catch (Exception e) {
            return;
        }
    }
}