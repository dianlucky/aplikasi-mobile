import { Component, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { IonModal } from '@ionic/angular'; //Modal Component
import { OverlayEventDetail } from '@ionic/core/components'; //Modal Component
import { ToastController } from '@ionic/angular'; //Toast Component

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonModal) modal!: IonModal;

  nama: any;
  no_hp: any;
  tempat_lahir: any;
  tanggal_lahir: any;
  alamat: any;
  pegawai: any;

  constructor(
    public _apiService: ApiService,
    private toastController: ToastController
  ) {
    this.getPegawai();
    //window.location.reload()
  }

  //Start Modal Function
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(null, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<String>>;
    if (ev.detail.role === 'confirm') {
      //this.message = `Hello, $(ev.detail.data)!`;
      this.tambahPegawai();
    }
  }

  async presentToast(message: any) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'bottom',
    });
    await toast.present();
  }

  tambahPegawai() {
    let data = {
      nama: this.nama,
      no_hp: this.no_hp,
      tempat_lahir: this.tempat_lahir,
      tanggal_lahir: this.tanggal_lahir,
      alamat: this.alamat,
    };
    if (data != null) {
      this._apiService.addPegawai(data).subscribe(
        (res: any) => {
          console.log('Berhasil menambah data pegawai', res);
          this.nama = '';
          this.no_hp = '';
          this.tempat_lahir = '';
          this.tanggal_lahir = '';
          this.alamat = '';
          this.presentToast('Berhasil menambah data pegawai');
          this.getPegawai();
        },
        (error: any) => {
          console.log('Gagal menambah data pegawai', error);
        }
      );
    } else {
      this.getPegawai();
    }
  }

  getPegawai() {
    this._apiService.getPegawai().subscribe(
      (res: any) => {
        console.log('Sukses', res);
        this.pegawai = res;
      },
      (error: any) => {
        console.log('Gagal', error);
      }
    );
  }

  deletePegawai(id: any) {
    this._apiService.deletePegawai(id).subscribe(
      (res: any) => {
        this.presentToast('Berhasil menghapus data');
        this.getPegawai();
      },
      (error: any) => {
        this.presentToast('Gagal menghapus data');
      }
    );
  }
}
