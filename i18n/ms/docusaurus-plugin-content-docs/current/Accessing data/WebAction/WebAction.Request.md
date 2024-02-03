---
title: WebAction.Request
---

# WebAction.Request


## Description

Mencipta tindakan yang apabila dilaksanakan akan mengembalikan keputusan melaksanakan permintaan HTTP sebagai nilai perduaan.


## Syntax

```powerquery
WebAction.Request(
    method as text,
    url as text,
    optional options as record
) as action
```


## Details

Mencipta tindakan yang, apabila dilaksanakan, akan mengembalikan hasil daripada melaksanakan permintaan <code>method</code> terhadap <code>url</code> menggunakan HTTP sebagai nilai perduaan. Parameter rekod pilihan, <code>options</code>, boleh diberikan untuk menentukan sifat tambahan. Rekod boleh mengandungi medan berikut:    <ul><li><code>Query</code> : Tambahkan parameter pertanyaan secara pengaturcaraan pada URL tanpa perlu bimbang tentang pelepasan.</li><li><code>ApiKeyName</code> : Jika tapak sasaran mempunyai tanggapan bagi kunci API, parameter ini boleh digunakan untuk menentukan nama (bukan nilai) bagi parameter kunci tersebut yang mesti digunakan dalam URL. Nilai kunci sebenar disediakan dalam kelayakan.</li><li><code>Headers</code> : Menentukan nilai ini sebagai rekod akan membekalkan pengepala tambahan pada permintaan HTTP.</li><li><code>Timeout</code> : Menentukan nilai ini sebagai tempoh akan mengubah tamat masa untuk permintaan HTTP. Nilai lalai ialah 100 saat.</li><li><code>ExcludedFromCacheKey</code> : Menentukan nilai ini sebagai senarai akan mengecualikan kunci pengepala HTTP ini daripada menjadi sebahagian daripada pengiraan untuk data cache.</li><li><code>IsRetry</code> : Menentukan nilai logik ini sebagai benar akan mengabaikan sebarang respons sedia ada dalam cache apabila mengambil data.</li><li><code>ManualStatusHandling</code> : Menentukan nilai ini sebagai senarai akan menghalang sebarang pengendalian terbina dalam untuk permintaan HTTP yang responsnya mempunyai salah satu kod status ini.</li><li><code>RelativePath</code> : Menentukan nilai ini sebagai teks menambahnya pada URL asas sebelum membuat permintaan.</li><li><code>Content</code> : Menentukan nilai ini akan menyebabkan kandungannya menjadi isi permintaan HTTP.</li></ul> <br />    Ambil perhatian bahawa fungsi ini dinyahdayakan dalam kebanyakan konteks. Sebaliknya, pertimbangkan untuk menggunakan Web.Contents atau Web.Headers.    


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
