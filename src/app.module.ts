import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExampleModule } from './example/example.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [ProductModule, ExampleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
