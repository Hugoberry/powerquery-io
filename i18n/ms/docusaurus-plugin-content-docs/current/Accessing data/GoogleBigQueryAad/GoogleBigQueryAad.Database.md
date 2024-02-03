---
title: GoogleBigQueryAad.Database
---

# GoogleBigQueryAad.Database


## Description

Import data daripada pangkalan data Google BigQuery menggunakan Azure AD


## Syntax

```powerquery
GoogleBigQueryAad.Database(
    billingProject as text,
    optional options as record
) as table
```


## Details

      Mengembalikan jadual yang menyenaraikan projek yang tersedia dalam Google BigQuery menggunakan Azure AD untuk <code>ID Projek Pengebilan</code> . Parameter rekod pilihan, <code>pilihan</code>, boleh ditentukan untuk mengawal pilihan berikut:      <ul>        <li><code>ConnectionTimeout</code>: Tempoh yang mengawal jangka masa bagi menunggu sebelum meninggalkan percubaan untuk membuat sambungan kepada pelayan. Nilai lalai ialah nilai Tamat Masa Sambungan ODBC.</li>        <li><code>CommandTimeout</code>: Tempoh yang mengawal jangka masa pertanyaan bahagian pelayan dibenarkan untuk berjalan sebelum ia dibatalkan.</li>        <li><code>UseStorageApi</code>: Menentukan sama ada untuk menggunakan API Storan BigQuery untuk set keputusan yang besar. Nilai lalai adalah benar untuk menggunakan API Storan. Tetapkan kepada palsu supaya tidak menggunakan API Storan</li>        <li><code>AudienceUri</code>: Ini ialah URI khalayak yang pemacu ODBC boleh gunakan untuk permintaan pertukaran tokennya. Medan ini mestilah URI yang layak sepenuhnya (cth. //iam.googleapis.com/locations/global/workforcePools/$\{pool_id}/providers/azuread) iaitu pool_id ialah nama yang unik secara global untuk mengenalpasti himpunan tenaga kerja.</li>      </ul>    Parameter rekod ditentukan sebagai [option1 = value1, option2 = value2...].    


## Examples

### Example #1 
Senaraikan projek yang tersedia dalam Google BigQuery menggunakan Azure AD
```powerquery
GoogleBigQueryAad.Database()
```



