package com.st2apr.gift.repository;

import com.st2apr.gift.model.Internship;
import jakarta.ejb.Stateless;
import jakarta.persistence.*;

@Stateless
public class InternshipRepository {
    private final EntityManager entityManager;

    public InternshipRepository() {
        EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("default");
        entityManager = entityManagerFactory.createEntityManager();
    }

    public void create(Internship internship) {
        EntityTransaction transaction = startTransaction();
        entityManager.persist(internship);
        endTransaction(transaction);
    }

    public Internship findById(int id) {
        return entityManager.find(Internship.class, id);
    }

    public void update(Internship internship) {
        EntityTransaction transaction = startTransaction();
        entityManager.merge(internship);
        endTransaction(transaction);
    }

    public void delete(Internship internship) {
        EntityTransaction transaction = startTransaction();
        entityManager.remove(entityManager.merge(internship));
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