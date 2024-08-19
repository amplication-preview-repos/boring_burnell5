import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ResearchModuleBase } from "./base/research.module.base";
import { ResearchService } from "./research.service";
import { ResearchController } from "./research.controller";
import { ResearchResolver } from "./research.resolver";

@Module({
  imports: [ResearchModuleBase, forwardRef(() => AuthModule)],
  controllers: [ResearchController],
  providers: [ResearchService, ResearchResolver],
  exports: [ResearchService],
})
export class ResearchModule {}
