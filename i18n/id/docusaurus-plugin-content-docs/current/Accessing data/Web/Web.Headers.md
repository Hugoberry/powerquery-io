---
title: Web.Headers
---

# Web.Headers


## Description

Menghasilkan header HTTP yang diunduh dari url sebagai nilai catatan.


## Syntax

```powerquery
Web.Headers(
    url as text,
    optional options as record
) as record
```


## Details

Menghasilkan header yang diunduh dari <code>url</code> sebagai catatan. Parameter catatan opsional, <code>options</code>, dapat diberikan untuk menentukan properti tambahan. Catatan dapat berisi bidang berikut:    <ul><li><code>Query</code> : Secara terprogram menambahkan parameter kueri ke URL tanpa harus khawatir tentang pelolosan.</li><li><code>ApiKeyName</code> : Jika situs target memiliki gagasan tentang kunci API, parameter ini dapat digunakan untuk menentukan nama (bukan nilai) parameter kunci yang harus digunakan dalam URL. Nilai kunci aktual diberikan dalam kredensial.</li><li><code>Headers</code> : Menetapkan nilai ini sebagai catatan akan memberikan header tambahan ke permintaan HTTP.</li><li><code>Timeout</code> : Menetapkan nilai ini sebagai durasi akan mengubah batas waktu untuk permintaan HTTP. Nilai defaultnya adalah 100 detik.</li><li><code>ExcludedFromCacheKey</code> : Menetapkan nilai ini sebagai daftar akan mengecualikan kunci header HTTP ini agar tidak menjadi bagian dari penghitungan data caching.</li><li><code>IsRetry</code> : Menetapkan nilai logika ini sebagai true akan mengabaikan respons yang ada dalam cache saat mengambil data.</li><li><code>ManualStatusHandling</code> : Menetapkan nilai ini sebagai daftar akan mencegah penanganan builtin untuk permintaan HTTP yang tanggapannya memiliki salah satu kode status ini.</li><li><code>RelativePath</code> : Menetapkan nilai ini sebagai teks akan menambahkannya ke URL dasar sebelum membuat permintaan.</li></ul>    Permintaan HTTP dibuat dengan metode HEAD. Di luar konteks konektor data kustom, hanya sebagian header respons yang tersedia (untuk alasan keamanan).    


## Examples

### Example #1 
Ambil header HTTP untuk &lt;code&gt;&#34;https://bing.com/search?q=Power+Query&#34;&lt;/code&gt; menggunakan opsi RelativePath dan Query.
```powerquery
let
    searchText = "Power Query"
in
    Web.Headers(
        "https://www.bing.com",
        [
            RelativePath = "search",
            Query = [q = searchText]
        ]
    )
```

Result: 
```powerquery
([
    #"Cache-Control" = "private, max-age=0",
    #"Content-Encoding" = "gzip",
    #"Content-Length" = "0",
    #"Content-Type" = "text/html; charset=utf-8",
    Date = "Tue, 14 Dec 2021 16:57:25 GMT",
    Expires = "Tue, 14 Dec 2021 16:56:25 GMT",
    Vary = "Accept-Encoding"
]
meta [
    Response.Status = 200
])
```




## Category
Accessing data
