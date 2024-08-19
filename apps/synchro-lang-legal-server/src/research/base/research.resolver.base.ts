/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Research } from "./Research";
import { ResearchCountArgs } from "./ResearchCountArgs";
import { ResearchFindManyArgs } from "./ResearchFindManyArgs";
import { ResearchFindUniqueArgs } from "./ResearchFindUniqueArgs";
import { CreateResearchArgs } from "./CreateResearchArgs";
import { UpdateResearchArgs } from "./UpdateResearchArgs";
import { DeleteResearchArgs } from "./DeleteResearchArgs";
import { CaseModel } from "../../caseModel/base/CaseModel";
import { ResearchService } from "../research.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Research)
export class ResearchResolverBase {
  constructor(
    protected readonly service: ResearchService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Research",
    action: "read",
    possession: "any",
  })
  async _researchItemsMeta(
    @graphql.Args() args: ResearchCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Research])
  @nestAccessControl.UseRoles({
    resource: "Research",
    action: "read",
    possession: "any",
  })
  async researchItems(
    @graphql.Args() args: ResearchFindManyArgs
  ): Promise<Research[]> {
    return this.service.researchItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Research, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Research",
    action: "read",
    possession: "own",
  })
  async research(
    @graphql.Args() args: ResearchFindUniqueArgs
  ): Promise<Research | null> {
    const result = await this.service.research(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Research)
  @nestAccessControl.UseRoles({
    resource: "Research",
    action: "create",
    possession: "any",
  })
  async createResearch(
    @graphql.Args() args: CreateResearchArgs
  ): Promise<Research> {
    return await this.service.createResearch({
      ...args,
      data: {
        ...args.data,

        caseField: args.data.caseField
          ? {
              connect: args.data.caseField,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Research)
  @nestAccessControl.UseRoles({
    resource: "Research",
    action: "update",
    possession: "any",
  })
  async updateResearch(
    @graphql.Args() args: UpdateResearchArgs
  ): Promise<Research | null> {
    try {
      return await this.service.updateResearch({
        ...args,
        data: {
          ...args.data,

          caseField: args.data.caseField
            ? {
                connect: args.data.caseField,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Research)
  @nestAccessControl.UseRoles({
    resource: "Research",
    action: "delete",
    possession: "any",
  })
  async deleteResearch(
    @graphql.Args() args: DeleteResearchArgs
  ): Promise<Research | null> {
    try {
      return await this.service.deleteResearch(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => CaseModel, {
    nullable: true,
    name: "caseField",
  })
  @nestAccessControl.UseRoles({
    resource: "CaseModel",
    action: "read",
    possession: "any",
  })
  async getCaseField(
    @graphql.Parent() parent: Research
  ): Promise<CaseModel | null> {
    const result = await this.service.getCaseField(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}