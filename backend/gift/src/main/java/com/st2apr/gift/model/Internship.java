package com.st2apr.gift.model;

import jakarta.persistence.*;

@Entity
@Table(name = "internship", schema = "public", catalog = "db")
public class Internship {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id", nullable = false)
    private int id;
    @Basic
    @Column(name = "mission_description", nullable = false, length = -1)
    private String missionDescription;
    @Basic
    @Column(name = "comment", nullable = true, length = -1)
    private String comment;
    @Basic
    @Column(name = "visit_form", nullable = true, length = -1)
    private String visitForm;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getMissionDescription() {
        return missionDescription;
    }

    public void setMissionDescription(String missionDescription) {
        this.missionDescription = missionDescription;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public String getVisitForm() {
        return visitForm;
    }

    public void setVisitForm(String visitForm) {
        this.visitForm = visitForm;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Internship that = (Internship) o;

        if (id != that.id) return false;
        if (missionDescription != null ? !missionDescription.equals(that.missionDescription) : that.missionDescription != null)
            return false;
        if (comment != null ? !comment.equals(that.comment) : that.comment != null) return false;
        if (visitForm != null ? !visitForm.equals(that.visitForm) : that.visitForm != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + (missionDescription != null ? missionDescription.hashCode() : 0);
        result = 31 * result + (comment != null ? comment.hashCode() : 0);
        result = 31 * result + (visitForm != null ? visitForm.hashCode() : 0);
        return result;
    }
}
