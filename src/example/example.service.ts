// example.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class ExampleService {
private elements: string[] = ['élément1', 'élément2', 'élément3'];

getElements(): string[] {
    return this.elements;
}

addElement(element: string): void {
    this.elements.push(element);
}
}
