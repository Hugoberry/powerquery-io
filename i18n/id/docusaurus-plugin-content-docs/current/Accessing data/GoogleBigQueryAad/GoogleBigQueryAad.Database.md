---
title: GoogleBigQueryAad.Database
---

# GoogleBigQueryAad.Database


## Description

Mengimpor data dari database Google BigQuery menggunakan Azure AD


## Syntax

```powerquery
GoogleBigQueryAad.Database(
    billingProject as text,
    optional options as record
) as table
```


## Details

      Menghasilkan tabel yang mencantumkan proyek yang tersedia di Google BigQuery menggunakan Azure AD untuk <code>ID Proyek Penagihan</code> . Parameter catatan opsional, <code>opsi</code>, dapat ditentukan untuk mengontrol opsi berikut:      <ul>        <li><code>ConnectionTimeout</code>: Durasi yang mengontrol jumlah waktu tunggu sebelum membatalkan upaya untuk membuat koneksi ke server. Nilai default-nya adalah nilai Waktu Koneksi Habis ODBC.</li>        <li><code>CommandTimeout</code>: Durasi yang mengontrol jumlah waktu kueri sisi server diizinkan untuk dijalankan sebelum dibatalkan.</li>        <li><code>UseStorageApi</code>: Menentukan apakah akan menggunakan API Penyimpanan BigQuery untuk kumpulan hasil yang besar. Nilai default-nya adalah true untuk menggunakan API Penyimpanan. Atur ke false agar API Penyimpanan tidak digunakan</li>        <li><code>AudienceUri</code>: Ini adalah URI audiens yang dapat digunakan driver ODBC untuk permintaan pertukaran token. Bidang ini harus berupa URI yang sepenuhnya memenuhi syarat (yaitu //iam.googleapis.com/locations/global/workforcePools/$\{pool_id}/providers/azuread) dengan pool_id adalah nama unik global untuk mengidentifikasi kumpulan tenaga kerja.</li>      </ul>    Parameter catatan ditentukan sebagai [option1 = value1, option2 = value2...].    


## Examples

### Example #1 
Cantumkan proyek yang tersedia di Google BigQuery menggunakan Azure AD
```powerquery
GoogleBigQueryAad.Database()
```



