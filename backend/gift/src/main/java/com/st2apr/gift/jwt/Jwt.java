package com.st2apr.gift.jwt;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;

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
}
