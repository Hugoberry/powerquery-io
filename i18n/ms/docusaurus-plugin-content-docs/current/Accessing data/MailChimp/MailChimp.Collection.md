---
title: MailChimp.Collection
---

# MailChimp.Collection


## Description

Mengembalikan jadual dengan data daripada titik akhir MailChimp.


## Syntax

```powerquery
MailChimp.Collection(
    path as text,
    optional entityName as text
) as table
```


## Details

Membuat panggilan ke API MailChimp dan mengembalikan set data yang terhasil sebagai jadual. Secara automatik menyelak-nyelak halaman semua keputusan. Parameter entityName pilihan boleh digunakan untuk titik akhir API yang titik akhir akar dan entityName utama dalam respons JSON tidak sepadan.


## Examples

### Example #1 
Menarik jadual data daripada titik akhir senarai API MailChimp.
```powerquery
MailChimp.Collection("lists")
```

Result: 
```powerquery
Jadual dengan data senarai.
```


### Example #2 
Menarik jadual data daripada titik akhir folder kempen API MailChimp.
```powerquery
MailChimp.Collection("campaign-folders", "folders")
```

Result: 
```powerquery
Jadual dengan data folder kempen.
```



