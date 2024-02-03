---
title: MailChimp.Collection
---

# MailChimp.Collection


## Description

Menghasilkan tabel dengan data dari titik akhir MailChimp.


## Syntax

```powerquery
MailChimp.Collection(
    path as text,
    optional entityName as text
) as table
```


## Details

Melakukan panggilan ke API MailChimp dan menghasilkan himpunan data sebagai tabel. Secara otomatis membuat halaman dari semua hasil. Parameter entityName opsional dapat digunakan untuk titik akhir API dengan titik akhir akar dan entityName utama dalam respons JSON tidak cocok.


## Examples

### Example #1 
Menarik tabel data dari titik akhir daftar API MailChimp.
```powerquery
MailChimp.Collection ('daftar")
```

Result: 
```powerquery
Tabel dengan data daftar.
```


### Example #2 
Menarik tabel data dari titik akhir folder-kampanye API MailChimp.
```powerquery
MailChimp.Collection("folder-kampanye", "folder")
```

Result: 
```powerquery
Tabel dengan data folder-kampanye.
```



