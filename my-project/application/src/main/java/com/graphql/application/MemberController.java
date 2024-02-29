package com.graphql.application;

import lombok.extern.slf4j.Slf4j;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.graphql.data.method.annotation.SchemaMapping;
import org.springframework.stereotype.Controller;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import java.util.logging.Level;

@Controller
@Slf4j
public class MemberController {

    private final MemberService memberService;

    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }

    @QueryMapping("getAllMembers")
    public Flux<Member> getAllMembers() {
        return processWithLogging(this.memberService.getAllMembers(), "Retrieving all members");
    }

    @SchemaMapping(typeName = "Mutation", field = "addMember")
    public Mono<Object> addMember(@Argument MemberInput memberInput) {
        return processWithLogging(this.memberService.addMember(memberInput), "Adding a member");
    }

    @QueryMapping("getMemberById")
    public Mono<Member> getMemberById(@Argument Integer id) {
        return processWithLogging(this.memberService.getMemberById(id), "Retrieving member by ID");
    }

    @SchemaMapping(typeName = "Mutation", field = "deleteMemberById")
    public Mono<Member> deleteMemberById(@Argument Integer id) {
        return processWithLogging(this.memberService.deleteMemberById(id), "Deleting member by ID");
    }

    @MutationMapping("updateMember")
    public Mono<Member> updateMember(@Argument Integer id, @Argument MemberInput memberInput) {
        return processWithLogging(this.memberService.updateMember(id, memberInput), "Updating member");
    }

    private <T> Flux<T> processWithLogging(Flux<T> fluxToProcess, String message) {
        return fluxToProcess.log("MemberController", Level.INFO)
                .doOnError(error -> log.error("Error: {}", error.getMessage()))
                .doOnComplete(() -> log.info(message + " completed"))
                .doOnCancel(() -> log.info(message + " canceled"));
    }

    private <T> Mono<T> processWithLogging(Mono<T> monoToProcess, String message) {
        return monoToProcess.log("MemberController", Level.INFO)
                .doOnError(error -> log.error("Error: {}", error.getMessage()))
                .doOnSuccess(data -> log.info(message + " completed"))
                .doOnCancel(() -> log.info(message + " canceled"));
    }
}
