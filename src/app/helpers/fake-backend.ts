import { Injectable } from "@angular/core";
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { delay, mergeMap, materialize, dematerialize } from "rxjs/operators";

let users = [
    { id: 1, firstName: 'TestUser1', lastName: '1', username: 'testUser1', password: 'test' },
    { id: 1, firstName: 'TestUser2', lastName: '2', username: 'testUser2', password: 'test' }
];

@Injectable()
export class FakeBackEndInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const {url, method, headers, body } = request;

        const handleRoute = () => {
            switch (true) {
                case url.endsWith('/users/authenticate') && method ==='POST':
                    return authenticate();
                default:
                    return next.handle(request);
            }
        }

        return of(null)
            .pipe(mergeMap(handleRoute))
            .pipe(materialize())
            .pipe(delay(500))
            .pipe(dematerialize());

        const authenticate = () => {
            const { username, password } = body;
            const user = users.find(u => u.username == username && u.password === password);
            if(!user) return error('Username or password is incorrect');
            return ok( {
                id: user.id,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                token: 'fake-jwt-token'
            })
        }

        const ok = (body?) => {
            return of(new HttpResponse({status: 200, body }));
        }

        const error = (message) => {
            return throwError({error: { message }});
        }
    }
}

export const fakeBackendProvider = {
    provide: HTTP_INTERCEPTORS,
    userClass: FakeBackEndInterceptor,
    multi: true
};
