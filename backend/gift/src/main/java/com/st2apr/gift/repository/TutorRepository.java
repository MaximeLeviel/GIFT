package com.st2apr.gift.repository;

import com.st2apr.gift.model.Tutor;
import jakarta.ejb.Stateless;
import jakarta.persistence.*;

@Stateless
public class TutorRepository {
    private final EntityManager entityManager;

    public TutorRepository() {
        EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("default");
        entityManager = entityManagerFactory.createEntityManager();
    }

    public void create(Tutor tutor) {
        EntityTransaction transaction = startTransaction();
        entityManager.persist(tutor);
        endTransaction(transaction);
    }

    public Tutor findById(int id) {
        return entityManager.find(Tutor.class, id);
    }

    public Tutor findByUsername(String username) {
        TypedQuery<Tutor> query = entityManager.createQuery("SELECT t FROM Tutor t WHERE t.username = :username", Tutor.class);
        query.setParameter("username", username);
        try {
            return query.getSingleResult();
        } catch (NoResultException e) {
            return null;
        }
    }

    public void update(Tutor tutor) {
        EntityTransaction transaction = startTransaction();
        entityManager.merge(tutor);
        endTransaction(transaction);
    }

    public void delete(Tutor tutor) {
        EntityTransaction transaction = startTransaction();
        entityManager.remove(entityManager.merge(tutor));
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