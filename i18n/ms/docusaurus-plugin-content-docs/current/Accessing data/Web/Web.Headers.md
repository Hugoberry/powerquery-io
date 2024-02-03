---
title: Web.Headers
---

# Web.Headers


## Description

Mengembalikan pengepala HTTP yang dimuat turun daripada url sebagai nilai rekod.


## Syntax

```powerquery
Web.Headers(
    url as text,
    optional options as record
) as record
```


## Details

Mengembalikan pengepala yang dimuat turun daripada <code>url</code> sebagai rekod. Parameter rekod pilihan, <code>options</code>, boleh diberikan untuk menentukan sifat tambahan. Rekod boleh mengandungi medan berikut:    <ul><li><code>Query</code> : Tambahkan parameter pertanyaan secara pengaturcaraan pada URL tanpa perlu bimbang tentang pelepasan.</li><li><code>ApiKeyName</code> : Jika tapak sasaran mempunyai tanggapan bagi kunci API, parameter ini boleh digunakan untuk menentukan nama (bukan nilai) bagi parameter kunci tersebut yang mesti digunakan dalam URL. Nilai kunci sebenar disediakan dalam kelayakan.</li><li><code>Headers</code> : Menentukan nilai ini sebagai rekod akan membekalkan pengepala tambahan pada permintaan HTTP.</li><li><code>Timeout</code> : Menentukan nilai ini sebagai tempoh akan mengubah tamat masa untuk permintaan HTTP. Nilai lalai ialah 100 saat.</li><li><code>ExcludedFromCacheKey</code> : Menentukan nilai ini sebagai senarai akan mengecualikan kunci pengepala HTTP ini daripada menjadi sebahagian daripada pengiraan untuk data cache.</li><li><code>IsRetry</code> : Menentukan nilai logik ini sebagai benar akan mengabaikan sebarang respons sedia ada dalam cache apabila mengambil data.</li><li><code>ManualStatusHandling</code> : Menentukan nilai ini sebagai senarai akan menghalang sebarang pengendalian terbina dalam untuk permintaan HTTP yang responsnya mempunyai salah satu kod status ini.</li><li><code>RelativePath</code> : Menentukan nilai ini sebagai teks menambahnya pada URL asas sebelum membuat permintaan.</li></ul>    Permintaan HTTP dibuat dengan kaedah HEAD. Di luar konteks penyambung data tersuai, hanya subset pengepala respons tersedia (atas sebab keselamatan).    


## Examples

### Example #1 
Ambil pengepala HTTP untuk &lt;code&gt;&#34;https://bing.com/search?q=Power+Query&#34;&lt;/code&gt; menggunakan opsyen RelativePath dan Query.
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
