/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Customer } from './interfaces/create-interface';

@Injectable()
export class CustomerService {
  private customers: Customer[] = [];

  getAllCustomers(): Customer[] {
    return this.customers;
  }

  addCustomer(createCustomerDto: CreateCustomerDto): Customer {
    const newCustomer: Customer = {
      id: Date.now(),
      ...createCustomerDto,
    };
    this.customers.push(newCustomer);
    return newCustomer;
  }
}
