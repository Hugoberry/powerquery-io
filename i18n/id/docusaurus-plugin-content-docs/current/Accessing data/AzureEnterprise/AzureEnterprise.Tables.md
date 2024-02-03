---
title: AzureEnterprise.Tables
---

# AzureEnterprise.Tables


## Description

Masukkan URL dari titik akhir API REST Azure Enterprise yang berhubungan dengan pendaftaran Anda


## Syntax

```powerquery
AzureEnterprise.Tables(
    url as text
) as table
```


## Details

Menghasilkan daftar laporan dan bulan yang tersedia dari API Azure Enterprise


## Examples

### Example #1 
Menggunakan fungsi AzureEnterprise.Tables dan bernavigasi ke nilai tertentu untuk memperoleh hasil.
```powerquery
Izinkan
    Sumber = AzureEnterprise.Tables("http://ea.azure.com/rest/12345"),
    Konten = Source{[Key="Contents"]}[Data]
in
    Konten
```

Result: 
```powerquery
Tabel
```



