import {
  OverrideMiddleware,
  AuthenticatedMiddleware,
  EndpointInfo,
  Request,
  Next,
  IMiddleware,
  EndpointMetadata
} from "@tsed/common";
import {Forbidden} from "@tsed/exceptions";

@OverrideMiddleware(AuthenticatedMiddleware)
export class MyAuthenticatedMiddleware implements IMiddleware {
  public use(@EndpointInfo() endpoint: EndpointMetadata,
             @Request() request: any,
             @Next() next: any) { // next is optional here

    // options given to the @Authenticated decorator
    const options = endpoint.get(AuthenticatedMiddleware) || {};
    // options => {role: 'admin'}

    if (!request.isAuthenticated()) { // passport.js
      throw new Forbidden("Forbidden")
    }

    next();
  }
}
