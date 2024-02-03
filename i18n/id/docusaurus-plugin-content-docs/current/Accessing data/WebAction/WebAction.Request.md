---
title: WebAction.Request
---

# WebAction.Request


## Description

Membuat tindakan yang ketika dieksekusi akan mengembalikan hasil dari melakukan permintaan HTTP sebagai nilai biner.


## Syntax

```powerquery
WebAction.Request(
    method as text,
    url as text,
    optional options as record
) as action
```


## Details

Membuat tindakan yang ketika dieksekusi akan memberikan hasil dari pelaksanaan permintaan <code>method</code> terhadap <code>url</code> menggunakan HTTP sebagai nilai biner.    Parameter catatan opsional, <code>options</code>, dapat diberikan untuk menentukan properti tambahan. Catatan dapat berisi bidang berikut:    <ul><li><code>Query</code> : Secara terprogram menambahkan parameter kueri ke URL tanpa harus khawatir tentang pelolosan.</li><li><code>ApiKeyName</code> : Jika situs target memiliki gagasan tentang kunci API, parameter ini dapat digunakan untuk menentukan nama (bukan nilai) parameter kunci yang harus digunakan dalam URL. Nilai kunci aktual diberikan dalam kredensial.</li><li><code>Headers</code> : Menetapkan nilai ini sebagai catatan akan memberikan header tambahan ke permintaan HTTP.</li><li><code>Timeout</code> : Menetapkan nilai ini sebagai durasi akan mengubah batas waktu untuk permintaan HTTP. Nilai defaultnya adalah 100 detik.</li><li><code>ExcludedFromCacheKey</code> : Menetapkan nilai ini sebagai daftar akan mengecualikan kunci header HTTP ini agar tidak menjadi bagian dari penghitungan data caching.</li><li><code>IsRetry</code> : Menetapkan nilai logika ini sebagai true akan mengabaikan respons yang ada dalam cache saat mengambil data.</li><li><code>ManualStatusHandling</code> : Menetapkan nilai ini sebagai daftar akan mencegah penanganan builtin untuk permintaan HTTP yang tanggapannya memiliki salah satu kode status ini.</li><li><code>RelativePath</code> : Menetapkan nilai ini sebagai teks akan menambahkannya ke URL dasar sebelum membuat permintaan.</li><li><code>Content</code> : Menetapkan nilai ini akan menyebabkan kontennya menjadi isi permintaan HTTP.</li></ul>    <br />    Perhatikan bahwa fungsi ini dinonaktifkan di sebagian besar konteks. Pertimbangkan untuk menggunakan Web.Contents atau Web.Headers sebagai gantinya.    


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
