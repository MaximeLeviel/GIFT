package com.st2apr.gift;

import com.st2apr.gift.model.Company;
import com.st2apr.gift.model.Internship;
import com.st2apr.gift.model.Student;
import com.st2apr.gift.repository.CompanyRepository;
import com.st2apr.gift.repository.InternshipRepository;
import com.st2apr.gift.repository.StudentRepository;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;

@Path("/hello-world")
public class HelloResource {
    @GET
    @Produces("text/plain")
    public String hello() {
        CompanyRepository companyRepository = new CompanyRepository();
        Company company = new Company();
        company.setName("company name");
        company.setAddress("company address");
        company.setTutor("company tutor");

        InternshipRepository internshipRepository = new InternshipRepository();
        Internship internship = new Internship();
        internship.setMissionDescription("mission description");
        internship.setVisitForm("visit form");
        internship.setComment("comment");

        StudentRepository studentRepository = new StudentRepository();
        Student student = new Student();
        student.setFirstName("Student first name");
        student.setLastName("Student last name");
        student.setGroupName("group name");
        student.setCompany(company);
        student.setInternship(internship);
        studentRepository.create(student);

        return "Hello, Elliot!";
    }
}