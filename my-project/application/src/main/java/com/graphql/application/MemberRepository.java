package com.graphql.application;

import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import reactor.core.publisher.Mono;

public interface MemberRepository extends ReactiveCrudRepository<Member, Integer> {

    Mono<Member> findByEmail(String email);
}
