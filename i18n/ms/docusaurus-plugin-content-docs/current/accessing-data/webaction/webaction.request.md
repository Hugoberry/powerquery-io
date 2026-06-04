---
title: WebAction.Request
---

# WebAction.Request


Mencipta tindakan yang apabila dilaksanakan akan mengembalikan keputusan melaksanakan permintaan HTTP sebagai nilai perduaan.


## Syntax

```powerquery
WebAction.Request(
    method as text,
    url as text,
    optional options as record
) as action
```


## Remarks

Mencipta tindakan yang, apabila dilaksanakan, akan mengembalikan hasil dalam melaksanakan permintaan `method` terhadap `url` menggunakan HTTP sebagai nilai perduaan. Parameter rekod pilihan, `options`, boleh diberikan untuk menentukan sifat tambahan. Rekod tersebut boleh mengandungi medan berikut:

-   `Query` : Tambahkan parameter pertanyaan secara pengaturcaraan pada URL tanpa perlu bimbang tentang pelepasan.
-   `ApiKeyName` : Jika tapak sasaran mempunyai tanggapan bagi kunci API, parameter ini boleh digunakan untuk menentukan nama (bukan nilai) bagi parameter kunci tersebut yang mesti digunakan dalam URL. Nilai kunci sebenar disediakan dalam kelayakan.
-   `Headers` : Menentukan nilai ini sebagai rekod akan membekalkan pengepala tambahan pada permintaan HTTP.
-   `Timeout` : Menentukan nilai ini sebagai tempoh akan mengubah tamat masa untuk permintaan HTTP. Nilai lalai ialah 100 saat.
-   `ExcludedFromCacheKey` : Menentukan nilai ini sebagai senarai akan mengecualikan kunci pengepala HTTP ini daripada menjadi sebahagian daripada pengiraan untuk data cache.
-   `IsRetry` : Menentukan nilai logik ini sebagai benar akan mengabaikan sebarang respons sedia ada dalam cache apabila mengambil data.
-   `ManualStatusHandling` : Menentukan nilai ini sebagai senarai akan menghalang sebarang pengendalian terbina dalam untuk permintaan HTTP yang responsnya mempunyai salah satu kod status ini.
-   `RelativePath` : Menentukan nilai ini sebagai teks menambahnya pada URL asas sebelum membuat permintaan.
-   `Content` : Menentukan nilai ini akan menyebabkan kandungannya menjadi isi permintaan HTTP.

Harap maklum bahawa fungsi ini dinyahdayakan dalam kebanyakan konteks. Pertimbangkan untuk menggunakan Web.Contents atau Web.Headers sebagai gantinya.


## Examples

### Example #1
Laksanakan permintaan GET terhadap Bing.
```powerquery
WebAction.Request(WebMethod.Get, "https://bing.com")
```

Result: 
```powerquery
Action
```




## Category
Action
