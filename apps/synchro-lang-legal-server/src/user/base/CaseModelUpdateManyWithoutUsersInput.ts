/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { CaseModelWhereUniqueInput } from "../../caseModel/base/CaseModelWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class CaseModelUpdateManyWithoutUsersInput {
  @Field(() => [CaseModelWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CaseModelWhereUniqueInput],
  })
  connect?: Array<CaseModelWhereUniqueInput>;

  @Field(() => [CaseModelWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CaseModelWhereUniqueInput],
  })
  disconnect?: Array<CaseModelWhereUniqueInput>;

  @Field(() => [CaseModelWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CaseModelWhereUniqueInput],
  })
  set?: Array<CaseModelWhereUniqueInput>;
}

export { CaseModelUpdateManyWithoutUsersInput as CaseModelUpdateManyWithoutUsersInput };
