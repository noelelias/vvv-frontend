import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ToastController } from '@ionic/angular';
import { toastController } from '@ionic/core';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(private http: HttpClient) {}

    get(url: string) {
        return this.http.get(environment.apiBase + url);
    }

    post(url: string, body: any) {
		const returnObservable = this.http.post(environment.apiBase + url, body).pipe(catchError( (err, caght) => {
				toastController.create({message: err?.error?.messages?.join(' - ')}).then(toast=>toast.present());
				return throwError(err);
			}
		));
        returnObservable.subscribe(data => {
            console.log(data);
        });
        return returnObservable;
    }

    login(email: string, password: string) {
        return this.post('endpoints/auth/login.php', { email, pass: password });
    }

    register(email: string, password: string) {
        return this.post('endpoints/auth/register.php', { email, pass: password });
    }
}
