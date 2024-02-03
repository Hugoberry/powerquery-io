---
title: AzureEnterprise.Contents
---

# AzureEnterprise.Contents


## Description

Kaydınızla ilişkilendirilen Azure Kurumsal REST API uç noktasının URL&#39;sini girin


## Syntax

```powerquery
AzureEnterprise.Contents(
    url as text,
    optional query as record
) as binary
```


## Details

Azure Kurumsal API'si için sağlanmış URL'ye yapılan çağrının ikili sonuçlarını döndürür.


## Examples

### Example #1 
AzureEnterprise.Contents işlevini kullanarak belirli bir raporun sonuçlarını döndürme.
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
Tablo
```



