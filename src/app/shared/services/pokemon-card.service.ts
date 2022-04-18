import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { PokemonCard } from '@models/pokemon-card.model';
import { CONFIG_ENV, ConfigEnv } from 'app/config/config-env';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable()
export class PokemonCardService {
  public apiUrl: string;

  constructor(
      @Inject(CONFIG_ENV) private readonly config: ConfigEnv,
      private readonly http: HttpClient,
  ) {
    this.apiUrl = this.config.environment.baseUrl;
  }

  getCardList(): Observable<PokemonCard[]> {
    return this.http.get<any>(`${this.apiUrl}/cards`).pipe(
        map((response) => response?.data || []),
        catchError((error: HttpErrorResponse) => throwError(() => new Error(error.message)))
      );
  }
}
