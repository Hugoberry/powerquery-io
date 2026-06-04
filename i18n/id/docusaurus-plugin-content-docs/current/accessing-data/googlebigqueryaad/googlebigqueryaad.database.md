---
title: GoogleBigQueryAad.Database
---

# GoogleBigQueryAad.Database


Mengimpor data dari database Google BigQuery menggunakan Microsoft Entra ID


## Syntax

```powerquery
GoogleBigQueryAad.Database(
    billingProject as text,
    optional options as record
) as table
```


## Remarks

Menghasilkan tabel yang mencantumkan proyek yang tersedia di Google BigQuery menggunakan Microsoft Entra ID untuk `ID Proyek Tagihan` . Parameter catatan opsional, `opsi`, dapat ditentukan untuk mengontrol opsi berikut:

-   `ConnectionTimeout`: Durasi yang mengontrol berapa lama harus menunggu sebelum membatalkan upaya untuk membuat koneksi ke server. Nilai default adalah nilai Waktu Koneksi Habis ODBC.
-   `CommandTimeout`: Durasi yang mengontrol berapa lama kueri sisi server diizinkan untuk berjalan sebelum dibatalkan.
-   `UseStorageApi`: Menentukan apakah akan menggunakan API Penyimpanan BigQuery untuk kumpulan hasil yang besar. Nilai default true untuk menggunakan API Penyimpanan. Atur ke false untuk tidak menggunakan API Penyimpanan
-   `AudienceUri`: Ini adalah URI audiens yang dapat digunakan pengandar ODBC untuk permintaan pertukaran token. Bidang ini harus merupakan URI yang sepenuhnya memenuhi syarat (yaitu //iam.googleapis.com/locations/global/workforcePools/$\{pool\_id\}/providers/azuread) di mana pool\_id adalah nama unik global untuk mengidentifikasi kumpulan tenaga kerja.

Parameter catatan ditentukan sebagai \[option1 = value1, option2 = value2...\].


## Examples

### Example #1
Cantumkan proyek yang tersedia di Google BigQuery menggunakan Microsoft Entra ID
```powerquery
GoogleBigQueryAad.Database()
```



