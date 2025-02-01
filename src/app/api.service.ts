import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://294.cyrotech.ch';

  constructor(private http: HttpClient) {
  }

  private getAuthHeaders(): HttpHeaders | undefined {
    const token = localStorage.getItem('token');
    return token ? new HttpHeaders().set('Authorization', `Bearer ${token}`) : undefined;
  }

  // Authentifizierung
  register(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/register-without-admin`, data);
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/login`, {email, password});
  }


  getCategories(): Observable<any[]> {
    const headers = this.getAuthHeaders();
    return this.http.get<any[]>(`${this.apiUrl}/categories`, headers ? {headers} : {});
  }

  getCategoryById(categoryId: number): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.get<any>(`${this.apiUrl}/categories/${categoryId}`, headers ? {headers} : {});
  }

  createCategory(category: { name: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/categories`, category, {headers: this.getAuthHeaders() || {}});
  }

  updateCategory(category: { id: number; name: string }): Observable<any> {
    return this.http.put(`${this.apiUrl}/categories/${category.id}`, category, {headers: this.getAuthHeaders() || {}});
  }

  deleteCategory(categoryId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/categories/${categoryId}`, {headers: this.getAuthHeaders() || {}});
  }


  getProducts(): Observable<any[]> {
    console.log('Fetching products from API...');
    return this.http.get<any[]>(`${this.apiUrl}/products`);
  }

  getProductById(productId: number): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.get<any>(`${this.apiUrl}/products/${productId}`, headers ? {headers} : {});
  }

  createProduct(product: { name: string; price: number; image: string; categoryId: number }): Observable<any> {
    return this.http.post(`${this.apiUrl}/products`, product, {headers: this.getAuthHeaders() || {}});
  }

  updateProduct(product: { id: number; name: string; price: number; image: string }): Observable<any> {
    return this.http.put(`${this.apiUrl}/products/${product.id}`, product, {headers: this.getAuthHeaders() || {}});
  }

  deleteProduct(productId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/products/${productId}`, {headers: this.getAuthHeaders() || {}});
  }


  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/users`, {headers: this.getAuthHeaders() || {}});
  }

  promoteUserToAdmin(userId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/${userId}/promote`, {}, {headers: this.getAuthHeaders() || {}});
  }
}
