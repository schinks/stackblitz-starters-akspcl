import { Injectable } from '@angular/core';
import SecureLS from 'secure-ls';
import * as jwt_decode from 'jwt-decode';

interface SecureLSConfig {
  isCompression?: boolean;
  encodingType?: string;
  encryptionSecret?: string;
  encryptionNamespace?: string;
}

@Injectable({
  providedIn: 'root',
})
export class DepsUtilService {
  createSecureLS(config?: SecureLSConfig): SecureLS {
    return new SecureLS(config);
  }

  jwtDecode<TTokenDto>(token: string, options?: jwt_decode.Options): TTokenDto {
    return JwtDecode(token, options);
  }

  win(): Window & typeof globalThis {
    return window;
  }
}
