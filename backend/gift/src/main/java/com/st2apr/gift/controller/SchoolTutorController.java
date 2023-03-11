package com.st2apr.gift.controller;

import com.st2apr.gift.jwt.Jwt;
import com.st2apr.gift.model.SchoolTutor;
import com.st2apr.gift.repository.SchoolTutorRepository;
import jakarta.persistence.NoResultException;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.Response;


import java.util.List;

@Path("/schooltutors")
public class SchoolTutorController {

    final SchoolTutorRepository schoolTutorRepository = new SchoolTutorRepository();

    @GET()
    @Produces("application/json")
    public List<SchoolTutor> getAllTutors() {
        return schoolTutorRepository.findAllTutors();
    }

    @GET()
    @Path("/{id}")
    @Produces("application/json")
    public SchoolTutor findById(@PathParam("id") int id) {
        return schoolTutorRepository.findById(id);
    }
    @POST
    @Consumes("application/json")
    public void createTutor(SchoolTutor schoolTutor) {
        schoolTutorRepository.create(schoolTutor);
    }

    @POST
    @Path("/login")
    @Consumes("application/json")
    @Produces("application/json")
    public Response login(Logindetails login) {
        try {
            SchoolTutor tutor = schoolTutorRepository.findByEmail(login.email);
            if (login.password.equals(tutor.getPassword())) {
                String token = Jwt.jwtToken(login.email);
                return Response.status(200).entity("You are successfully logged in").header("Token", Jwt.jwtToken(login.email)).build();
            } else {
                throw new NoResultException();
            }
        } catch (NoResultException e) {
            return null;
        }
    }

    @PUT
    @Path("/{id}")
    @Consumes("application/json")
    public void updateTutor(SchoolTutor schoolTutor) {
        schoolTutorRepository.update(schoolTutor);
    }
}