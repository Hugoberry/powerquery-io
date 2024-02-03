---
title: AzureEnterprise.Contents
---

# AzureEnterprise.Contents


## Description

Įveskite „Azure Enterprise“ REST API galinio punkto, susieto su jūsų registracija, URL


## Syntax

```powerquery
AzureEnterprise.Contents(
    url as text,
    optional query as record
) as binary
```


## Details

Rodomi pateikto „Azure Enterprise“ API URL iškvietimo dvejetainiai rezultatai.


## Examples

### Example #1 
Funkcijos „AzureEnterprise.Contents“ naudojimas norint grįžti prie konkrečios ataskaitos rezultatų.
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
Lentelė
```



