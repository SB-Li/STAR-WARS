import { TestBed, async } from '@angular/core/testing';
import { orderByPipe } from './orderBy.pipe';

describe('orderByPipe', () => {
  it('create an instance', () => {
    const pipe = new orderByPipe();
    expect(pipe).toBeTruthy();
  });
});
