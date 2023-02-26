package com.st2apr.gift.repository;

import com.st2apr.gift.model.Company;
import jakarta.ejb.Stateless;
import jakarta.persistence.*;

@Stateless
public class CompanyRepository {
    private final EntityManager entityManager;

    public CompanyRepository() {
        EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("default");
        entityManager = entityManagerFactory.createEntityManager();
    }

    public void create(Company company) {
        EntityTransaction transaction = startTransaction();
        entityManager.persist(company);
        endTransaction(transaction);
    }

    public Company findById(int id) {
        return entityManager.find(Company.class, id);
    }

    public Company findByName(String name) {
        TypedQuery<Company> query = entityManager.createQuery("SELECT c FROM Company c WHERE c.name = :name", Company.class);
        query.setParameter("name", name);
        try {
            return query.getSingleResult();
        } catch (NoResultException e) {
            return null;
        }
    }

    public void update(Company company) {
        EntityTransaction transaction = startTransaction();
        entityManager.merge(company);
        endTransaction(transaction);
    }

    public void delete(Company company) {
        EntityTransaction transaction = startTransaction();
        entityManager.remove(entityManager.merge(company));
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
