---
title: WebAction.Request
---

# WebAction.Request


Membuat tindakan yang ketika dieksekusi akan mengembalikan hasil dari melakukan permintaan HTTP sebagai nilai biner.


## Syntax

```powerquery
WebAction.Request(
    method as text,
    url as text,
    optional options as record
) as action
```


## Remarks

Membuat tindakan yang ketika dieksekusi akan menghasilkan hasil dari melakukan permintaan `method` terhadap `url` menggunakan HTTP sebagai nilai biner. Parameter catatan opsional, `options`, dapat diberikan untuk menentukan properti tambahan. Catatan dapat berisi bidang berikut:

-   `Query` : Secara terprogram menambahkan parameter kueri ke URL tanpa harus khawatir tentang pelolosan.
-   `ApiKeyName` : Jika situs target memiliki gagasan tentang kunci API, parameter ini dapat digunakan untuk menentukan nama (bukan nilai) parameter kunci yang harus digunakan dalam URL. Nilai kunci aktual diberikan dalam kredensial.
-   `Headers` : Menetapkan nilai ini sebagai catatan akan memberikan header tambahan ke permintaan HTTP.
-   `Timeout` : Menetapkan nilai ini sebagai durasi akan mengubah batas waktu untuk permintaan HTTP. Nilai defaultnya adalah 100 detik.
-   `ExcludedFromCacheKey` : Menetapkan nilai ini sebagai daftar akan mengecualikan kunci header HTTP ini agar tidak menjadi bagian dari penghitungan data caching.
-   `IsRetry` : Menetapkan nilai logika ini sebagai true akan mengabaikan respons yang ada dalam cache saat mengambil data.
-   `ManualStatusHandling` : Menetapkan nilai ini sebagai daftar akan mencegah penanganan builtin untuk permintaan HTTP yang tanggapannya memiliki salah satu kode status ini.
-   `RelativePath` : Menetapkan nilai ini sebagai teks akan menambahkannya ke URL dasar sebelum membuat permintaan.
-   `Content` : Menetapkan nilai ini akan menyebabkan kontennya menjadi isi permintaan HTTP.

Perlu diperhatikan bahwa fungsi ini dinonaktifkan di sebagian besar konteks. Pertimbangkan untuk menggunakan Web.Contents atau Web.Headers sebagai gantinya.


## Examples

### Example #1
Lakukan permintaan GET terhadap Bing.
```powerquery
WebAction.Request(WebMethod.Get, "https://bing.com")
```

Result: 
```powerquery
Action
```




## Category
Action
