---
title: Web.Contents
---

# Web.Contents


## Description

Menghasilkan konten yang diunduh dari url sebagai biner.


## Syntax

```powerquery
Web.Contents(
    url as text,
    optional options as record
) as binary
```


## Details

Menghasilkan konten yang diunduh dari <code>url</code> sebagai biner. Parameter catatan opsional, <code>options</code>, dapat diberikan untuk menentukan properti tambahan. Catatan dapat berisi bidang berikut:    <ul><li><code>Query</code> : Secara terprogram menambahkan parameter kueri ke URL tanpa harus khawatir tentang pelolosan.</li><li><code>ApiKeyName</code> : Jika situs target memiliki gagasan tentang kunci API, parameter ini dapat digunakan untuk menentukan nama (bukan nilai) parameter kunci yang harus digunakan dalam URL. Nilai kunci aktual diberikan dalam kredensial.</li><li><code>Headers</code> : Menetapkan nilai ini sebagai catatan akan memberikan header tambahan ke permintaan HTTP.</li><li><code>Timeout</code> : Menetapkan nilai ini sebagai durasi akan mengubah batas waktu untuk permintaan HTTP. Nilai defaultnya adalah 100 detik.</li><li><code>ExcludedFromCacheKey</code> : Menetapkan nilai ini sebagai daftar akan mengecualikan kunci header HTTP ini agar tidak menjadi bagian dari penghitungan data caching.</li><li><code>IsRetry</code> : Menetapkan nilai logika ini sebagai true akan mengabaikan respons yang ada dalam cache saat mengambil data.</li><li><code>ManualStatusHandling</code> : Menetapkan nilai ini sebagai daftar akan mencegah penanganan builtin untuk permintaan HTTP yang tanggapannya memiliki salah satu kode status ini.</li><li><code>RelativePath</code> : Menetapkan nilai ini sebagai teks akan menambahkannya ke URL dasar sebelum membuat permintaan.</li><li><code>Content</code> : Menetapkan nilai ini akan mengubah permintaan web dari GET menjadi POST, menggunakan nilai opsi sebagai konten POST.</li></ul>    Permintaan HTTP dibuat sebagai GET (ketika tidak ada Konten yang ditentukan) atau POST (ketika terdapat Konten). Permintaan POST hanya dapat dibuat secara anonim.    <br />    Header respons HTTP tersedia sebagai metadata pada hasil biner. Di luar konteks konektor data kustom, hanya sebagian header respons yang tersedia (untuk alasan keamanan).    


## Examples

### Example #1 
Ambil konten &lt;code&gt;&#34;https://bing.com/search?q=Power+Query&#34;&lt;/code&gt; menggunakan opsi RelativePath dan Query. Opsi ini dapat digunakan untuk mengkueri URL dasar statis secara dinamis.
```powerquery
let
    searchText = "Power Query"
in
    Web.Contents(
        "https://www.bing.com",
        [
            RelativePath = "search",
            Query = [q = searchText]
        ]
    )
```

Result: 
```powerquery
binary
```


### Example #2 
Jalankan POST terhadap URL, meneruskan payload JSON biner dan mengurai respons sebagai JSON.
```powerquery
let
    url = ...,
    headers = [#"Content-Type" = "application/json"],
    postData = Json.FromValue([x = 235.7, y = 41.53]),
    response = Web.Contents(
        url,
        [
            Headers = headers,
            Content = postData
        ]
    ),
    jsonResponse = Json.Document(response)
in
    jsonResponse
```

Result: 
```powerquery
table
```


### Example #3 
Sambungkan ke URL aman yang menerima kunci autentikasi sebagai bagian dari string kuerinya. Daripada pengodean permanen kunci rahasia di M (yang dapat menimbulkan risiko keamanan),     kunci dapat disediakan secara aman dengan menentukan namanya (bukan nilainya) di M, memilih autentikasi API Web, dan memasukkan nilai kunci sebagai bagian dari kredensial API Web.    Saat digunakan dengan cara ini, contoh berikut akan menghasilkan permintaan untuk &lt;code&gt;&#34;https://contoso.com/api/customers/get?api_key=\*\*\*\*\*\*&#34;&lt;/code&gt;.
```powerquery
Web.Contents("https://contoso.com/api/customers/get", [ApiKeyName="api_key"])
```

Result: 
```powerquery
binary
```




## Category
Accessing data
