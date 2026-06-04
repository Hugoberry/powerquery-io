---
title: GoogleBigQueryAad.Database
---

# GoogleBigQueryAad.Database


Import data daripada pangkalan data Google BigQuery menggunakan Microsoft Entra ID


## Syntax

```powerquery
GoogleBigQueryAad.Database(
    billingProject as text,
    optional options as record
) as table
```


## Remarks

Mengembalikan jadual yang menyenaraikan projek yang tersedia dalam Google BigQuery menggunakan Microsoft Entra ID untuk `ID Projek Pengebilan` . Parameter rekod pilihan, `opsyen`, boleh ditentukan untuk mengawal opsyen berikut:

-   `ConnectionTimeout`: Tempoh yang mengawal berapa lama untuk menunggu sebelum meninggalkan percubaan bagi mewujudkan sambungan ke pelayan. Nilai lalai ialah nilai Tamat Masa Sambungan ODBC.
-   `CommandTimeout`: Tempoh yang mengawal berapa lama pertanyaan sebelah pelayan dibenarkan untuk dijalankan sebelum dibatalkan.
-   `UseStorageApi`: Menentukan sama ada untuk menggunakan API Storan BigQuery untuk set hasil yang besar. Nila lalai ialah benar untuk menggunakan API Storan. Tetapkan kepada palsu untuk tidak menggunakan API Storan
-   `AudienceUri`: Ini ialah URI khalayak yang boleh digunakan oleh pemacu ODBC untuk permintaan pertukaran tokennya. Medan ini mestilah URI yang layak sepenuhnya (iaitu //iam.googleapis.com/locations/global/workforcePools/$\{pool\_id\}/providers/azuread) yang mana pool\_id ialah nama yang unik secara global untuk mengenal pasti himpunan tenaga kerja.

Parameter rekod ditentukan sebagai \[option1 = value1, option2 = value2...\].


## Examples

### Example #1
Senaraikan projek yang tersedia dalam Google BigQuery menggunakan Microsoft Entra ID
```powerquery
GoogleBigQueryAad.Database()
```



