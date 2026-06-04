---
title: Web.Contents
---

# Web.Contents


Mengembalikan kandungan yang dimuat turun daripada url sebagai perduaan.


## Syntax

```powerquery
Web.Contents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Mengembalikan kandungan yang dimuat turun daripada `url` sebagai perduaan. Parameter rekod pilihan, `options`, boleh diberikan untuk menentukan sifat tambahan. Rekod tersebut boleh mengandungi medan berikut:

-   `Query` : Tambahkan parameter pertanyaan secara pengaturcaraan pada URL tanpa perlu bimbang tentang pelepasan.
-   `ApiKeyName` : Jika tapak sasaran mempunyai tanggapan bagi kunci API, parameter ini boleh digunakan untuk menentukan nama (bukan nilai) bagi parameter kunci tersebut yang mesti digunakan dalam URL. Nilai kunci sebenar disediakan dalam kelayakan.
-   `Headers` : Menentukan nilai ini sebagai rekod akan membekalkan pengepala tambahan pada permintaan HTTP.
-   `Timeout` : Menentukan nilai ini sebagai tempoh akan mengubah tamat masa untuk permintaan HTTP. Nilai lalai ialah 100 saat.
-   `ExcludedFromCacheKey` : Menentukan nilai ini sebagai senarai akan mengecualikan kunci pengepala HTTP ini daripada menjadi sebahagian daripada pengiraan untuk data cache.
-   `IsRetry` : Menentukan nilai logik ini sebagai benar akan mengabaikan sebarang respons sedia ada dalam cache apabila mengambil data.
-   `ManualStatusHandling` : Menentukan nilai ini sebagai senarai akan menghalang sebarang pengendalian terbina dalam untuk permintaan HTTP yang responsnya mempunyai salah satu kod status ini.
-   `RelativePath` : Menentukan nilai ini sebagai teks menambahnya pada URL asas sebelum membuat permintaan.
-   `Content` : Menentukan nilai ini akan mengubah permintaan web daripada GET kepada POST, menggunakan nilai opsyen sebagai kandungan POST.

Permintaan HTTP dibuat sebagai GET (apabila tiada Kandungan ditentukan) atau POST (apabila terdapat Kandungan). Permintaan POST hanya boleh dibuat tanpa nama.  
  
Pengepala respons HTTP tersedia sebagai metadata pada hasil perduaan. Di luar konteks penyambung data tersuai, hanya subset pengepala respons tersedia (atas sebab keselamatan).


## Examples

### Example #1
Ambil kandungan `"https://bing.com/search?q=Power+Query"` menggunakan opsyen RelativePath dan Query. Opsyen ini boleh digunakan untuk bertanya secara dinamik satu URL asas statik.
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
Laksanakan POST terhadap URL, menghantar muat beban JSON perduaan dan menghuraikan respons sebagai JSON.
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
Sambung ke URL selamat yang menerima kunci pengesahan sebagai sebahagian daripada rentetan pertanyaannya. Daripada mengekod keras kunci rahsia dalam M (yang akan menimbulkan risiko keselamatan), kunci boleh diberikan dengan selamat dengan menentukan namanya (bukan nilainya) dalam M, memilih pengesahan API Web dan memasukkan nilai kunci sebagai sebahagian daripada kelayakan API Web. Apabila digunakan dengan cara ini, contoh berikut akan menjana permintaan untuk `"https://contoso.com/api/customers/get?api_key=******"`.
```powerquery
Web.Contents("https://contoso.com/api/customers/get", [ApiKeyName="api_key"])
```

Result: 
```powerquery
binary
```




## Category
Accessing data
