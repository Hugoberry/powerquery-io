---
title: SharePoint.Files
---

# SharePoint.Files


## Description

Mengembalikan jadual yang mengandungi dokumen daripada tapak SharePoint.


## Syntax

```powerquery
SharePoint.Files(
    url as text,
    optional options as record
) as table
```


## Details

Mengembalikan jadual yang mengandungi satu baris bagi setiap dokumen yang ditemui pada tapak SharePoint yang ditentukan, <code>url</code> dan subfolder. Setiap baris mengandungi sifat bagi folder atau fail itu dan pautan kepada kandungannya. <code>options</code> boleh ditentukan untuk mengawal opsyen berikut:    <ul><li><code>ApiVersion</code> : Nombor (14 atau 15) atau teks &quot;Auto&quot; yang menentukan versi API SharePoint untuk digunakan bagi tapak ini. Apabila tidak ditentukan, versi API 14 digunakan. Apabila Auto ditentukan, versi pelayan akan secara automatik ditemui jika boleh, jika tidak, versi ditetapkan secara lalai kepada 14. Tapak SharePoint bukan Bahasa Inggeris memerlukan sekurang-kurangnya versi 15.</li></ul>    



## Category
Accessing data
