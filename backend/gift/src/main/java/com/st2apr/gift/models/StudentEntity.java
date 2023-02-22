package com.st2apr.gift.models;

import jakarta.persistence.*;

@Entity
@Table(name = "student", schema = "public", catalog = "db")
public class StudentEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id", nullable = false)
    private int id;
    @Basic
    @Column(name = "first_name", nullable = false, length = -1)
    private String firstName;
    @Basic
    @Column(name = "last_name", nullable = false, length = -1)
    private String lastName;
    @Basic
    @Column(name = "group_name", nullable = false, length = -1)
    private String groupName;
    @Basic
    @Column(name = "internship_id", nullable = false)
    private int internshipId;
    @Basic
    @Column(name = "company_id", nullable = false)
    private int companyId;
    @ManyToOne
    @JoinColumn(name = "internship_id", referencedColumnName = "id", nullable = false)
    private InternshipEntity internshipByInternshipId;
    @ManyToOne
    @JoinColumn(name = "company_id", referencedColumnName = "id", nullable = false)
    private CompanyEntity companyByCompanyId;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getGroupName() {
        return groupName;
    }

    public void setGroupName(String groupName) {
        this.groupName = groupName;
    }

    public int getInternshipId() {
        return internshipId;
    }

    public void setInternshipId(int internshipId) {
        this.internshipId = internshipId;
    }

    public int getCompanyId() {
        return companyId;
    }

    public void setCompanyId(int companyId) {
        this.companyId = companyId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        StudentEntity that = (StudentEntity) o;

        if (id != that.id) return false;
        if (internshipId != that.internshipId) return false;
        if (companyId != that.companyId) return false;
        if (firstName != null ? !firstName.equals(that.firstName) : that.firstName != null) return false;
        if (lastName != null ? !lastName.equals(that.lastName) : that.lastName != null) return false;
        if (groupName != null ? !groupName.equals(that.groupName) : that.groupName != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + (firstName != null ? firstName.hashCode() : 0);
        result = 31 * result + (lastName != null ? lastName.hashCode() : 0);
        result = 31 * result + (groupName != null ? groupName.hashCode() : 0);
        result = 31 * result + internshipId;
        result = 31 * result + companyId;
        return result;
    }

    public InternshipEntity getInternshipByInternshipId() {
        return internshipByInternshipId;
    }

    public void setInternshipByInternshipId(InternshipEntity internshipByInternshipId) {
        this.internshipByInternshipId = internshipByInternshipId;
    }

    public CompanyEntity getCompanyByCompanyId() {
        return companyByCompanyId;
    }

    public void setCompanyByCompanyId(CompanyEntity companyByCompanyId) {
        this.companyByCompanyId = companyByCompanyId;
    }
}
