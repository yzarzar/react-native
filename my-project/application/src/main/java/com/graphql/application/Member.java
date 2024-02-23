package com.graphql.application;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import java.util.Objects;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Table("member")
public class Member {

    @Id
    private Integer id;
    private String email;
    private String password;

    public Member(MemberInput memberInput) {
        this.email = Objects.requireNonNull(memberInput.getEmail());
        this.password = Objects.requireNonNull(memberInput.getPassword());
    }
}
