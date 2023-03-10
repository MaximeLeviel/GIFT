package com.st2apr.gift.repository;

import com.st2apr.gift.model.SchoolTutor;
import com.st2apr.gift.model.Student;
import jakarta.ejb.Stateless;
import jakarta.persistence.*;

import java.util.List;

@Stateless
public class SchoolTutorRepository {
    private final EntityManager entityManager;

    public SchoolTutorRepository() {
        EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("default");
        entityManager = entityManagerFactory.createEntityManager();
    }

    public void create(SchoolTutor schoolTutor) {
        EntityTransaction transaction = startTransaction();
        entityManager.persist(schoolTutor);
        endTransaction(transaction);
    }

    public List<SchoolTutor> findAllTutors() {
        TypedQuery<SchoolTutor> query = entityManager.createNamedQuery("SchoolTutor.findAllTutors", SchoolTutor.class);
        return query.getResultList();
    }

    public SchoolTutor findById(int id) {
        return entityManager.find(SchoolTutor.class, id);
    }

    public SchoolTutor login(String email, String password) {
        TypedQuery<SchoolTutor> query = entityManager.createNamedQuery("SchoolTutor.login", SchoolTutor.class);
        query.setParameter("email", email);
        query.setParameter("password", password);
        try {
            return query.getSingleResult();
        } catch (NoResultException e) {
            return null;
        }
    }

    public void update(SchoolTutor schoolTutor) {
        EntityTransaction transaction = startTransaction();
        entityManager.merge(schoolTutor);
        endTransaction(transaction);
    }

    public void delete(SchoolTutor schoolTutor) {
        EntityTransaction transaction = startTransaction();
        entityManager.remove(entityManager.merge(schoolTutor));
        endTransaction(transaction);
    }

    private EntityTransaction startTransaction() {
        EntityTransaction transaction = entityManager.getTransaction();
        transaction.begin();
        return transaction;
    }

    private void endTransaction(EntityTransaction transaction) {
        transaction.commit();
        entityManager.close();
    }
}