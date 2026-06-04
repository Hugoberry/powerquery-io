---
title: OData.Feed
---

# OData.Feed


Menghasilkan tabel feed OData yang diberikan oleh layanan OData.


## Syntax

```powerquery
OData.Feed(
    serviceUri as text,
    optional headers as record,
    optional options as any
) as any
```


## Remarks

Menghasilkan tabel umpan OData yang ditawarkan oleh layanan OData dari uri `serviceUri`, header `headers`. Nilai boolean yang menentukan apakah akan menggunakan koneksi serentak atau parameter catatan opsional, `options`, dapat ditentukan untuk mengontrol opsi berikut:

-   `Query`: Tambahkan parameter kueri ke URL secara terprogram tanpa harus mengkhawatirkan proses escaping.
-   `Headers`: Menentukan nilai ini sebagai rekaman akan memberikan header tambahan ke dalam permintaan HTTP.
-   `ExcludedFromCacheKey`: Menentukan nilai ini sebagai daftar akan mengecualikan kunci header HTTP ini agar tidak menjadi bagian dari penghitungan untuk penyimpanan di cache.
-   `ApiKeyName`: Jika situs target memiliki konsep kunci API, parameter ini dapat digunakan untuk menentukan nama (bukan nilai) parameter kunci yang harus digunakan di URL. Nilai kunci yang sebenarnya diberikan dalam kredensial.
-   `Timeout`: Menentukan nilai ini sebagai durasi akan mengubah batas waktu untuk permintaan HTTP. Nilai defaultnya adalah 600 detik.
-   `EnableBatch`: Logika (true/false) yang mengatur apakah akan mengizinkan pembuatan permintaan $batch OData jika MaxUriLength terlampaui (defaultnya false).
-   `MaxUriLength`: Angka yang menunjukkan panjang maksimum uri yang diizinkan yang dikirim ke layanan OData. Jika terlampaui dan EnableBatch benar, permintaan akan dibuat ke titik akhir $batch OData, jika tidak, permintaan akan gagal (defaultnya adalah 2048).
-   `Concurrent`: Logika (true/false) ketika diatur ke true, permintaan ke layanan akan dilakukan secara bersamaan. Jika diatur ke false, permintaan akan dibuat secara berurutan. Jika tidak ditentukan, nilai akan ditentukan oleh anotasi AsynchronousRequestsSupported layanan. Jika layanan tidak menentukan apakah AsynchronousRequestsSupported didukung, permintaan akan dibuat berurutan.
-   `ODataVersion`: Angka (3 atau 4) yang menentukan versi protokol OData yang akan digunakan untuk layanan OData ini. Jika tidak ditentukan, semua versi yang didukung akan diminta. Versi layanan akan ditentukan oleh header OData-Version yang dihasilkan oleh layanan.
-   `FunctionOverloads`: Logika (true/false) ketika diatur ke true, overload impor fungsi akan tercantum dalam navigator sebagai entri terpisah, ketika diatur ke false, beban berlebih impor fungsi akan tercantum sebagai satu fungsi gabungan dalam navigator. Nilai default untuk V3: false. Nilai default untuk V4: true.
-   `MoreColumns`: Logika (true/false) ketika diatur ke true, menambahkan kolom "Kolom Lainnya" ke setiap umpan entitas yang berisi tipe terbuka dan tipe polimorfik. Ini akan berisi bidang yang tidak dicantumkan di tipe dasar. Jika false, bidang ini tidak ada. Default ke false.
-   `IncludeAnnotations`: Daftar nama atau pola yang memenuhi syarat namespace yang dipisahkan koma untuk disertakan dengan "\*" sebagai wildcard. Secara default, tidak ada anotasi yang disertakan.
-   `IncludeMetadataAnnotations`: Daftar yang dipisahkan koma dari nama istilah atau pola yang memenuhi syarat untuk disertakan pada permintaan dokumen metadata, dengan "\*" sebagai wildcard. Secara default, menyertakan anotasi yang sama seperti IncludeAnnotations.
-   `OmitValues`: Mengizinkan layanan OData untuk menghindari menulis nilai tertentu dalam respons. Jika diakui oleh layanan, kami akan menyimpulkan nilai tersebut dari bidang yang dihilangkan. Opsinya meliputi:
    -   `ODataOmitValues.Nulls`: Mengizinkan layanan OData untuk menghilangkan nilai null.
-   `Implementation`: Menentukan implementasi konektor OData yang akan digunakan. Nilai yang valid adalah "2.0" atau null.


## Examples

### Example #1
Sambungkan ke layanan OData TripPin.
```powerquery
OData.Feed("https://services.odata.org/V4/TripPinService")
```

Result: 
```powerquery
table
```




## Category
Accessing data
