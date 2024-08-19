import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ResearchServiceBase } from "./base/research.service.base";

@Injectable()
export class ResearchService extends ResearchServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
