package com.graphql.application;

import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import reactor.core.publisher.MonoOperator;

@Service
public class MemberService {

    private final MemberRepository memberRepository;

    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    public Flux<Member> getAllMembers() {
        return this.memberRepository.findAll()
                .switchIfEmpty(MonoOperator.error(new IllegalArgumentException("No Member found!")));
    }

    public Mono<Object> addMember(MemberInput memberInput) {
        String email = memberInput.getEmail();
        return this.memberRepository.findByEmail(email)
                .flatMap(existingMember -> Mono.error(new IllegalArgumentException("Member with address " + email + " already exists")))
                .switchIfEmpty(memberRepository.save(new Member(memberInput)));
    }

    public Mono<Member> deleteMemberById(Integer id) {
        return getMemberById(id)
                .switchIfEmpty(Mono.error(new IllegalArgumentException("Book not found with id : " + id)))
                .map(member -> {
                    this.memberRepository.deleteById(id).subscribe();
                    return member;
                });
    }

    public Mono<Member> updateMember(Integer id, MemberInput memberInput) {
        return this.memberRepository.findById(id)
                .switchIfEmpty(Mono.error(new IllegalArgumentException("Book not found with id : " + id)))
                .flatMap(member -> {
                    member.setEmail(memberInput.getEmail());
                    member.setPassword(memberInput.getPassword());
                    return this.memberRepository.save(member);
                });
    }

    public Mono<Member> getMemberById(Integer id) {
        return this.memberRepository.findById(id)
                .switchIfEmpty(Mono.error(new IllegalArgumentException("Member not found with id : " + id)));
    }
}
