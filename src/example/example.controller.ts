// example.controller.ts
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ExampleService } from './example.service';

@Controller('example')
export class ExampleController {
  constructor(private readonly exampleService: ExampleService) {}

  @Get('elements')
  getElements(): string[] {
    return this.exampleService.getElements();
  }

  @Post('elements')
  addElement(@Body('element') element: string): void {
    this.exampleService.addElement(element);
  }
}