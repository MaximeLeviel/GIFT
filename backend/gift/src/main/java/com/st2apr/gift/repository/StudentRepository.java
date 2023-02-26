package com.st2apr.gift.repository;

import com.st2apr.gift.model.Student;
import jakarta.ejb.Stateless;
import jakarta.persistence.*;

@Stateless
public class StudentRepository {
    private final EntityManager entityManager;

    public StudentRepository() {
        EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("default");
        entityManager = entityManagerFactory.createEntityManager();
    }

    public void create(Student student) {
        EntityTransaction transaction = startTransaction();
        entityManager.persist(student);
        endTransaction(transaction);
    }

    public Student findById(int id) {
        return entityManager.find(Student.class, id);
    }

    public Student findByFirstName(String firstName) {
        TypedQuery<Student> query = entityManager.createQuery("SELECT s FROM Student s WHERE s.firstName = :firstName", Student.class);
        query.setParameter("firstName", firstName);
        try {
            return query.getSingleResult();
        } catch (NoResultException e) {
            return null;
        }
    }

    public void update(Student student) {
        EntityTransaction transaction = startTransaction();
        entityManager.merge(student);
        endTransaction(transaction);
    }

    public void delete(Student student) {
        EntityTransaction transaction = startTransaction();
        entityManager.remove(entityManager.merge(student));
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