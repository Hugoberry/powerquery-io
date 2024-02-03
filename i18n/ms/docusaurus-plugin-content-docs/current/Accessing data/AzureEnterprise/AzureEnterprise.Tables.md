---
title: AzureEnterprise.Tables
---

# AzureEnterprise.Tables


## Description

Masukkan URL bagi titik akhir API REST Azure Enterprise yang dikaitkan dengan pendaftaran anda


## Syntax

```powerquery
AzureEnterprise.Tables(
    url as text
) as table
```


## Details

Mengembalikan senarai laporan dan bulan yang tersedia daripada API Azure Enterprise


## Examples

### Example #1 
Menggunakan fungsi AzureEnterprise.Tables dan menavigasi ke nilai tertentu untuk mendapatkan keputusan.
```powerquery
let
    Source = AzureEnterprise.Tables("http://ea.azure.com/rest/12345"),
    Contents = Source{[Key="Contents"]}[Data]
in
    Contents
```

Result: 
```powerquery
Jadual
```



