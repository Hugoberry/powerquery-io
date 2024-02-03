---
title: Web.Contents
---

# Web.Contents


## Description

Mengembalikan kandungan yang dimuat turun daripada url sebagai perduaan.


## Syntax

```powerquery
Web.Contents(
    url as text,
    optional options as record
) as binary
```


## Details

Mengembalikan kandungan yang dimuat turun daripada <code>url</code> sebagai perduaan. Parameter rekod pilihan, <code>options</code>, boleh diberikan untuk menentukan sifat tambahan. Rekod boleh mengandungi medan berikut: <ul><li><code>Query</code> : Tambahkan parameter pertanyaan secara pengaturcaraan pada URL tanpa perlu bimbang tentang pelepasan.</li><li><code>ApiKeyName</code> : Jika tapak sasaran mempunyai tanggapan bagi kunci API, parameter ini boleh digunakan untuk menentukan nama (bukan nilai) bagi parameter kunci tersebut yang mesti digunakan dalam URL. Nilai kunci sebenar disediakan dalam kelayakan.</li><li><code>Headers</code> : Menentukan nilai ini sebagai rekod akan membekalkan pengepala tambahan pada permintaan HTTP.</li><li><code>Timeout</code> : Menentukan nilai ini sebagai tempoh akan mengubah tamat masa untuk permintaan HTTP. Nilai lalai ialah 100 saat.</li><li><code>ExcludedFromCacheKey</code> : Menentukan nilai ini sebagai senarai akan mengecualikan kunci pengepala HTTP ini daripada menjadi sebahagian daripada pengiraan untuk data cache.</li><li><code>IsRetry</code> : Menentukan nilai logik ini sebagai benar akan mengabaikan sebarang respons sedia ada dalam cache apabila mengambil data.</li><li><code>ManualStatusHandling</code> : Menentukan nilai ini sebagai senarai akan menghalang sebarang pengendalian terbina dalam untuk permintaan HTTP yang responsnya mempunyai salah satu kod status ini.</li><li><code>RelativePath</code> : Menentukan nilai ini sebagai teks menambahnya pada URL asas sebelum membuat permintaan.</li><li><code>Content</code> : Menentukan nilai ini akan mengubah permintaan web daripada GET kepada POST, menggunakan nilai opsyen sebagai kandungan POST.</li></ul> Permintaan HTTP dibuat sebagai GET (apabila tiada Kandungan ditentukan) atau POST (apabila terdapat Kandungan). Permintaan POST hanya boleh dibuat tanpa nama.   <br /> Pengepala respons HTTP tersedia sebagai metadata pada hasil perduaan. Di luar konteks penyambung data tersuai, hanya subset pengepala respons tersedia (atas sebab keselamatan).    


## Examples

### Example #1 
Ambil kandungan &lt;code&gt;&#34;https://bing.com/search?q=Power+Query&#34;&lt;/code&gt; menggunakan opsyen RelativePath dan Query. Opsyen ini boleh digunakan untuk bertanya secara dinamik satu URL asas statik.
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
Sambung ke URL selamat yang menerima kunci pengesahan sebagai sebahagian daripada rentetan pertanyaannya. Daripada mengekod keras kunci rahsia dalam M (yang akan menimbalkan risiko keselamatan),     kunci boleh diberikan dengan selamat dengan menentukan namanya (bukan nilainya) dalam M, memilih pengesahan API Web dan memasukkan nilai kunci sebagai sebahagian daripada kelayakan API Web.    Apabila digunakan dengan cara ini, contoh berikut akan menjana permintaan untuk &lt;code&gt;&#34;https://contoso.com/api/customers/get?api_key=\*\*\*\*\*\*&#34;&lt;/code&gt;.
```powerquery
Web.Contents("https://contoso.com/api/customers/get", [ApiKeyName="api_key"])
```

Result: 
```powerquery
binary
```




## Category
Accessing data
