using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using QAPlatform.Repositories.UserRepository;
using QAPlatform.Models;
using System.Web.Http.Controllers;

namespace QAPlatform.Controller
{
    public class ApiTokenFilter : Microsoft.AspNetCore.Mvc.Filters.IActionFilter
    {
        public IUserRepository _repository;

        public ApiTokenFilter()
        {

        }

        public void OnActionExecuted(Microsoft.AspNetCore.Mvc.Filters.ActionExecutedContext context)
        {

        }

        public void OnActionExecuting(Microsoft.AspNetCore.Mvc.Filters.ActionExecutingContext context)
        {
            _repository = new UserRepository(new Contexts.Context());



            String token = null;
            IEnumerable<String> headerValues;
            var keyValue = context.HttpContext.Request.Headers.FirstOrDefault(x => x.Key == "Authorization");
            token = keyValue.Value;

            List<User> users = _repository.GetAll();
            var user = users.FirstOrDefault(x => x.Token == token);

            bool permitted = false;

            if (token != null && token != default(string))
            {
                try
                {

                    if (user != null)
                    {
                        if (user.Token == token)
                        {
            
                            permitted = true;
                            context.ActionArguments["userId"]=user.Id;
                            
                        }
                       
                    }
                    else
                    {
                        permitted = false;
                    }
                }
                catch (SecurityTokenInvalidSignatureException sTi)
                {
                   
                    context.HttpContext.Response.StatusCode = 400;
                    return;
                }
                catch (SecurityTokenExpiredException ste)
                {
                  
                    context.HttpContext.Response.StatusCode = 400;
                    return;
                }
                catch (Exception ex)
                {
                    
                    throw ex;
                }
            }

            if (!permitted)
            {
                
                context.HttpContext.Response.StatusCode = 400;

               

            }
        }

        private HttpResponseMessage CreateUnauthorizedMessage(HttpActionContext actionContext)
        {
            return actionContext.Request
                     .CreateErrorResponse(HttpStatusCode.Unauthorized, "You do not have access to this resource!");
        }
    }
}