/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested, IsEnum } from "class-validator";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DocumentListRelationFilter } from "../../document/base/DocumentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { MessageListRelationFilter } from "../../message/base/MessageListRelationFilter";
import { ReportListRelationFilter } from "../../report/base/ReportListRelationFilter";
import { ResearchListRelationFilter } from "../../research/base/ResearchListRelationFilter";
import { EnumCaseModelStatus } from "./EnumCaseModelStatus";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class CaseModelWhereInput {
  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  deadline?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  description?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => DocumentListRelationFilter,
  })
  @ValidateNested()
  @Type(() => DocumentListRelationFilter)
  @IsOptional()
  @Field(() => DocumentListRelationFilter, {
    nullable: true,
  })
  documents?: DocumentListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => MessageListRelationFilter,
  })
  @ValidateNested()
  @Type(() => MessageListRelationFilter)
  @IsOptional()
  @Field(() => MessageListRelationFilter, {
    nullable: true,
  })
  messages?: MessageListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ReportListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ReportListRelationFilter)
  @IsOptional()
  @Field(() => ReportListRelationFilter, {
    nullable: true,
  })
  reports?: ReportListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ResearchListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ResearchListRelationFilter)
  @IsOptional()
  @Field(() => ResearchListRelationFilter, {
    nullable: true,
  })
  researchItems?: ResearchListRelationFilter;

  @ApiProperty({
    required: false,
    enum: EnumCaseModelStatus,
  })
  @IsEnum(EnumCaseModelStatus)
  @IsOptional()
  @Field(() => EnumCaseModelStatus, {
    nullable: true,
  })
  status?: "Option1";

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  title?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput;
}

export { CaseModelWhereInput as CaseModelWhereInput };
