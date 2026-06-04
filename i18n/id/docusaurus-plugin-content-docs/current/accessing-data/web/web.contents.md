---
title: Web.Contents
---

# Web.Contents


Menghasilkan konten yang diunduh dari url sebagai biner.


## Syntax

```powerquery
Web.Contents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Menghasilkan konten yang diunduh dari `url` sebagai biner. Parameter catatan opsional, `options`, dapat diberikan untuk menentukan properti tambahan. Catatan dapat berisi bidang berikut:

-   `Query` : Secara terprogram menambahkan parameter kueri ke URL tanpa harus khawatir tentang pelolosan.
-   `ApiKeyName` : Jika situs target memiliki gagasan tentang kunci API, parameter ini dapat digunakan untuk menentukan nama (bukan nilai) parameter kunci yang harus digunakan dalam URL. Nilai kunci aktual diberikan dalam kredensial.
-   `Headers` : Menetapkan nilai ini sebagai catatan akan memberikan header tambahan ke permintaan HTTP.
-   `Timeout` : Menetapkan nilai ini sebagai durasi akan mengubah batas waktu untuk permintaan HTTP. Nilai defaultnya adalah 100 detik.
-   `ExcludedFromCacheKey` : Menetapkan nilai ini sebagai daftar akan mengecualikan kunci header HTTP ini agar tidak menjadi bagian dari penghitungan data caching.
-   `IsRetry` : Menetapkan nilai logika ini sebagai true akan mengabaikan respons yang ada dalam cache saat mengambil data.
-   `ManualStatusHandling` : Menetapkan nilai ini sebagai daftar akan mencegah penanganan builtin untuk permintaan HTTP yang tanggapannya memiliki salah satu kode status ini.
-   `RelativePath` : Menetapkan nilai ini sebagai teks akan menambahkannya ke URL dasar sebelum membuat permintaan.
-   `Content` : Menetapkan nilai ini akan mengubah permintaan web dari GET menjadi POST, menggunakan nilai opsi sebagai konten POST.

Permintaan HTTP dibuat sebagai GET (ketika tidak ada Konten yang ditentukan) atau POST (ketika terdapat Konten). Permintaan POST hanya dapat dibuat secara anonim.  
  
Header respons HTTP tersedia sebagai metadata pada hasil biner. Di luar konteks konektor data kustom, hanya sebagian header respons yang tersedia (untuk alasan keamanan).


## Examples

### Example #1
Ambil konten `"https://bing.com/search?q=Power+Query"` menggunakan opsi RelativePath dan Query. Opsi ini dapat digunakan untuk mengkueri URL dasar statis secara dinamis.
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
Sambungkan ke URL aman yang menerima kunci autentikasi sebagai bagian dari string kuerinya. Alih-alih pengodean permanen kunci rahasia di M (yang dapat menimbulkan risiko keamanan), kunci dapat disediakan secara aman dengan menentukan namanya (bukan nilainya) di M, memilih autentikasi API Web, dan memasukkan nilai kunci sebagai bagian dari kredensial API Web. Saat digunakan dengan cara ini, contoh berikut akan menghasilkan permintaan untuk `"https://contoso.com/api/customers/get?api_key=******"`.
```powerquery
Web.Contents("https://contoso.com/api/customers/get", [ApiKeyName="api_key"])
```

Result: 
```powerquery
binary
```




## Category
Accessing data
