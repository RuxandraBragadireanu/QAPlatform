import * as Express from "express";
import * as Passport from "passport";
import {BodyParams, Controller, Get, Post, Request, Req, Required, Res} from "@tsed/common";
import axios from 'axios';
import { apiUrl } from "../../api-url";
import { BadRequest } from "@tsed/exceptions";

Passport.serializeUser(function(user, done) {
  done(null, user);
});

Passport.deserializeUser(function(user, done) {
  done(null, user);
});

@Controller("/auth")
export class PassportCtrl {

  @Post("/login")
  async login(@Request() request: any) {
    const { username , password } = request.body;
    try {
      const res = await axios.post(apiUrl + "/user/login", {
        username,
        password
      });
      console.log('response login', res.data);
      return res.data;
    } catch (e) {
      console.log('something went wrong... ', e);
      throw new BadRequest("Something went wrong...");
    }
  }

  @Post("/signup")
  async signup(@Request() request: any) {
    const { username , password } = request.body;
    try {
      const res = await axios.post(apiUrl + "/user/register", {
        username,
        password,
        role: 0
      });
      return res.data;
    } catch (e) {
      console.log('something went wrong... ', e);
      throw new BadRequest("Something went wrong...");
    }
  }


  @Post("/logout")
  public logout(@Req() request) {
    request.logout();
    return "Success!";
  }

}

function myStringify(obj) {
  var cache = [];

  return JSON.stringify(obj, function(key, value) {
    if (typeof value === 'object' && value !== null) {
      if (cache.indexOf(value) !== -1) {
        // Duplicate reference found
        try {
          // If this value does not reference a parent it can be deduped
          return JSON.parse(JSON.stringify(value));
        } catch (error) {
          // discard key if value cannot be deduped
          return;
        }
      }
      // Store value in our collection
      cache.push(value);
    }
    return value;
  });
}

