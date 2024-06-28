import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class AppService {
  constructor(
    private readonly httpService: HttpService,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }
  async getData(): Promise<any> {
    try {
      const response = await this.httpService.axiosRef.get('http://es-mx.dotit-corp.com/ps_product_5/_search');
      console.log('res.data', response.data.hits);
      return response.data.hits;
    } catch (err) {
      console.log('res.error', err);
      throw new Error(
        err?.message + ': ' + JSON.stringify(err?.response?.data),
      );
    }
  }
  
}