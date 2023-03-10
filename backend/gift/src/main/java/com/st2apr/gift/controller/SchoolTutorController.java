package com.st2apr.gift.controller;

import com.st2apr.gift.model.SchoolTutor;
import com.st2apr.gift.repository.SchoolTutorRepository;
import jakarta.ws.rs.*;
import java.util.List;

@Path("/schooltutor")
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
    @Path("/login?email={email}&password={password}")
    @Consumes("application/json")
    public SchoolTutor login(@PathParam("email") String email, @PathParam("password") String password) { return schoolTutorRepository.login(email, password);
    }

    @PUT
    @Path("/{id}")
    @Consumes("application/json")
    public void updateTutor(SchoolTutor schoolTutor) {
        schoolTutorRepository.update(schoolTutor);
    }
}