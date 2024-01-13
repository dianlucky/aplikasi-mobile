import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(public http: HttpClient) {}

  addPegawai(data: any) {
    return this.http.post('http://simpatik.id/kantor/create_pegawai.php', data);
  }

  getPegawai() {
    return this.http.get('http://simpatik.id/kantor/get_all_pegawai.php');
  }

  deletePegawai(id: any) {
    return this.http.get(
      'http://simpatik.id/kantor/delete_pegawai.php?id=' + id
    );
  }

  getOnePegawai(id: any) {
    return this.http.get(
      'http://simpatik.id/kantor/get_one_pegawai.php?id=' + id
    );
  }

  updatePegawai(id: any, data: any) {
    return this.http.put(
      'http://simpatik.id/kantor/update_pegawai.php?id=' + id,
      data
    );
  }
}
