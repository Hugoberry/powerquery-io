---
title: AzureEnterprise.Contents
---

# AzureEnterprise.Contents


## Description

Masukkan URL bagi titik akhir API REST Azure Enterprise yang dikaitkan dengan pendaftaran anda


## Syntax

```powerquery
AzureEnterprise.Contents(
    url as text,
    optional query as record
) as binary
```


## Details

Mengembalikan keputusan perduaan bagi panggilan ke url yang diberikan untuk API Azure Enterprise.


## Examples

### Example #1 
Menggunakan fungsi AzureEnterprise.Contents untuk mengembalikan keputusan bagi laporan tertentu.
```powerquery
        let
            report = Table.FromColumns({Lines.FromBinary(Binary.Buffer(AzureEnterprise.Contents("https://ea.azure.com/rest/12345/usage-report", [month="2014-04", type="summary", fmt="Csv"])),null,null,1252)}),
            skips = Table.Skip(report, 2),
            split =  Table.SplitColumn(skips, "Column1", Splitter.SplitTextByDelimiter(",", QuoteStyle.Csv)),
            promoted = Table.PromoteHeaders(split)
        in
            promoted
```

Result: 
```powerquery
Jadual
```



