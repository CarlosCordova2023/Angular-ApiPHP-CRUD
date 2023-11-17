import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from './Empleado';
import { ThisReceiver } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  API: String = 'http://localhost/empleados/';

  constructor(private clienteHttp: HttpClient) { }
  
  AgregarEmpleado(datosEmpleado: Empleado): Observable<any> {
    
    return this.clienteHttp.post(this.API + "?insertar=1", datosEmpleado);

  }

  ObtenerEmpleados() {
    return this.clienteHttp.get(String(this.API));

  }

  borrarEmpleado(id: any): Observable<any> {
    return this.clienteHttp.get(String(this.API) + "?borrar=" + id);

  }

  obtenerEmpleado(id: any): Observable<any> {
    return this.clienteHttp.get(String(this.API) + "?consultar=" + id);

  }


  editarEmpleado(id:any,datosEmpleado: any): Observable<any> {
    
    return this.clienteHttp.post(this.API + "?actualizar="+id, datosEmpleado);



  }

}