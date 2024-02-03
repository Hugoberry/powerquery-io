---
title: AzureEnterprise.Contents
---

# AzureEnterprise.Contents


## Description

Masukkan URL dari titik akhir API REST Azure Enterprise yang berhubungan dengan pendaftaran Anda


## Syntax

```powerquery
AzureEnterprise.Contents(
    url as text,
    optional query as record
) as binary
```


## Details

Mengembalikan hasil biner dari panggilan terhadap url yang diberikan untuk Azure Enterprise API.


## Examples

### Example #1 
Menggunakan fungsi AzureEnterprise.Contents untuk mengembalikan hasil laporan tertentu.
```powerquery
        izinkan
            laporan = Table.FromColumns({Lines.FromBinary(Binary.Buffer(AzureEnterprise.Contents("https://ea.azure.com/rest/12345/usage-report", [month="2014-04", type="summary", fmt="Csv"])),null,null,1252)}),
            skips = Table.Skip(report, 2),
            split =  Table.SplitColumn(skips, "Column1", Splitter.SplitTextByDelimiter(",", QuoteStyle.Csv)),
            promoted = Table.PromoteHeaders(split)
        dalam
            dipromosikan
```

Result: 
```powerquery
Tabel
```



