package com.graphql.application;

import lombok.extern.slf4j.Slf4j;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.graphql.data.method.annotation.SchemaMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import reactor.core.publisher.SignalType;

import java.util.logging.Level;

@Controller
@Slf4j
@CrossOrigin("http://localhost:19006")
public class MemberController {

    private final MemberService memberService;

    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }

    @QueryMapping("getAllMembers")
    public Flux<Member> getAllComputers() {
        return processWithLog(this.memberService.getAllMembers());
    }

    @SchemaMapping(typeName = "Mutation", field = "addMember")
    public Mono<Object> addComputer(@Argument MemberInput memberInput) {
        return processWithLog(this.memberService.addComputer(memberInput));
    }

    @QueryMapping("getMemberById")
    public Mono<Member> getComputerById(@Argument Integer id) {
        return processWithLog(this.memberService.getComputerById(id));
    }

    @SchemaMapping(typeName = "Mutation", field = "deleteMemberById")
    public Mono<Member> deleteComputerById(@Argument Integer id) {
        return processWithLog(this.memberService.deleteComputerById(id));
    }

    @MutationMapping("updateMember")
    public Mono<Member> updateComputer(@Argument Integer id, @Argument MemberInput memberInput) {
        return processWithLog(this.memberService.updateComputer(id, memberInput));
    }

    private <T> Flux<T> processWithLog(Flux<T> fluxToLog) {
        return fluxToLog
                .log("MemberController.", Level.INFO, SignalType.ON_NEXT, SignalType.ON_COMPLETE);
    }

    private <T> Mono<T> processWithLog(Mono<T> monoToLog) {
        return monoToLog
                .log("MemberController.", Level.INFO, SignalType.ON_NEXT, SignalType.ON_COMPLETE);
    }
}
