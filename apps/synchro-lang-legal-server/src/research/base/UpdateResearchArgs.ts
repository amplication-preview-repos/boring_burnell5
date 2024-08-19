/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ResearchWhereUniqueInput } from "./ResearchWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ResearchUpdateInput } from "./ResearchUpdateInput";

@ArgsType()
class UpdateResearchArgs {
  @ApiProperty({
    required: true,
    type: () => ResearchWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ResearchWhereUniqueInput)
  @Field(() => ResearchWhereUniqueInput, { nullable: false })
  where!: ResearchWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ResearchUpdateInput,
  })
  @ValidateNested()
  @Type(() => ResearchUpdateInput)
  @Field(() => ResearchUpdateInput, { nullable: false })
  data!: ResearchUpdateInput;
}

export { UpdateResearchArgs as UpdateResearchArgs };
