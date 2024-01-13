import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-update-pegawai',
  templateUrl: './update-pegawai.page.html',
  styleUrls: ['./update-pegawai.page.scss'],
})
export class UpdatePegawaiPage implements OnInit {
  id_pegawai: any;
  nama: any;
  no_hp: any;
  tempat_lahir: any;
  tanggal_lahir: any;
  alamat: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _apiService: ApiService,
    private toastController: ToastController
  ) {
    this.route.params.subscribe((params: any) => {
      this.id_pegawai = params.id;
      console.log(this.id_pegawai);
      this.getOnePegawai(this.id_pegawai);
      this.getPegawai();
    });
  }

  async presentToast(message: any) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'bottom',
    });

    await toast.present();
  }

  ngOnInit() {}

  getOnePegawai(id: any) {
    this._apiService.getOnePegawai(id).subscribe(
      (res: any) => {
        console.log('SUCCESS', res);
        let pegawai = res[0];
        this.nama = pegawai.nama;
        this.no_hp = pegawai.no_hp;
        this.tempat_lahir = pegawai.tempat_lahir;
        this.tanggal_lahir = pegawai.tanggal_lahir;
        this.alamat = pegawai.alamat;
      },
      (err: any) => {
        console.log('ERROR', err);
      }
    );
  }

  updatePegawai() {
    let data = {
      nama: this.nama,
      no_hp: this.no_hp,
      tempat_lahir: this.tempat_lahir,
      tanggal_lahir: this.tanggal_lahir,
      alamat: this.alamat,
    };
    this._apiService.updatePegawai(this.id_pegawai, data).subscribe(
      (res: any) => {
        console.log('SUCCESS', res);
        this.presentToast('Berhasil Merubah Data');
      },
      (err: any) => {
        console.log('ERROR', err);
        this.presentToast('Gagal merubah data');
      }
    );
  }

  kembali() {
    this.router.navigate(['/home'], { state: { reload: true } }).then();
  }

  getPegawai() {
    this._apiService.getPegawai().subscribe(
      (res: any) => {
        console.log('SUKSES', res);
        this.getPegawai();
      },
      (error: any) => {
        console.log('GAGAL', error);
      }
    );
  }
}
