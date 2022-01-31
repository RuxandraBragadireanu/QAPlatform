import { Authenticated, BodyParams, Controller, Delete, Get, PathParams, Post, Put, Request } from '@tsed/common';
import axios from 'axios';
import { apiUrl } from "../../api-url";
import { BadRequest } from "@tsed/exceptions";

@Controller('/api/generic')
export class GenericController {

  constructor() {}

  @Get('/*')
  public async getGeneric(@Request() request: any) {
    const url = request.originalUrl.replace('/api/generic/','');
    try {
      const res = await axios.get(apiUrl + url);
      return res.data;
    } catch (e) {
      console.log('something went wrong... ', e);
      throw new BadRequest("Something went wrong...");
    }
  }

  @Post('/*')
  public async postGeneric(@Request() request: any) {
    const url = request.originalUrl.replace('/api/generic/','');
    const body = request.body;
    const token = request.headers.authorization;
    try {
      const res = await axios.post(apiUrl + url, body, {
          headers: {
              'Authorization': token
          }
      });
      return res.data;
    } catch (e) {
      console.log('something went wrong... ', e);
      throw new BadRequest("Something went wrong...");
    }
  }

  @Put('/*')
  public async putGeneric(@Request() request: any) {
    const url = request.originalUrl.replace('/api/generic/','');
    const body = request.body;
    const token = request.headers.authorization;
    try {
      const res = await axios.put(apiUrl + url, body, {
          headers: {
              'Authorization': token
          }
      });
      return res.data;
    } catch (e) {
      console.log('something went wrong... ', e);
      throw new BadRequest("Something went wrong...");
    }
  }

  @Delete('/*')
  public async deleteGeneric(@Request() request: any) {
    const url = request.originalUrl.replace('/api/generic/','');
    const token = request.headers.authorization;
    console.log('url: ', apiUrl + url);
    console.log('token: ', token);
    try {
      const res = await axios.delete(apiUrl + url, {
          headers: {
              'Authorization': token
          }
      });
      return res.data;
    } catch (e) {
      console.log('something went wrong... ', e);
      throw new BadRequest("Something went wrong...");
    }
  }
}
