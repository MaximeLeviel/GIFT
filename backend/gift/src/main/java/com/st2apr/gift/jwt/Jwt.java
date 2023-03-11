package com.st2apr.gift.jwt;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.InvalidClaimException;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.Claim;
import com.auth0.jwt.interfaces.DecodedJWT;
import jakarta.persistence.NoResultException;
import jakarta.ws.rs.HeaderParam;

import java.util.Date;
import java.util.UUID;

public class Jwt {

    public static String jwtToken(String email) {
        Algorithm algorithm = Algorithm.HMAC256("secret");

        return JWT.create()
            .withIssuer("secret")
            .withSubject("SchoolTutors Credentials")
            .withClaim("email", email)
            .withIssuedAt(new Date())
            .withJWTId(UUID.randomUUID()
                    .toString())
            .sign(algorithm); }

    public static String verifyToken(String token) {
        Algorithm algorithm = Algorithm.HMAC256("secret");
        JWTVerifier verifier = JWT.require(algorithm).withIssuer("secret").build();
        try {
            DecodedJWT decodedJWT = verifier.verify(token);
            return (decodedJWT.getClaim("email").toString());
        } catch (JWTVerificationException e) {
            System.out.println(e.getMessage());
        }
        return null;
    }

    public static String getTokenFromHeader(String token){
        try {
            if (token.isEmpty()) {
                throw new NoResultException("No authentification headers");
            } else {
                String userId = Jwt.verifyToken(token);
                if (userId.isEmpty()) {
                    throw new InvalidClaimException("Invalid token");
                } else {
                    return userId;
                }
            }
        } catch (Exception e) {
            return null;
        }
    }
}
