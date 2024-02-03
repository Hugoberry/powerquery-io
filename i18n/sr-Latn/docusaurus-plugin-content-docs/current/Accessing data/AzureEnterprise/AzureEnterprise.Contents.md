---
title: AzureEnterprise.Contents
---

# AzureEnterprise.Contents


## Description

Unos URL-a krajnje tačke Azure Enterprise REST API-ja povezane sa upisnicom


## Syntax

```powerquery
AzureEnterprise.Contents(
    url as text,
    optional query as record
) as binary
```


## Details

Vraća binarne rezultate poziva URL-a navedenog za Azure Enterprise API.


## Examples

### Example #1 
Upotreba funkcije AzureEnterprise.Contents za vraćanje rezultata nekog konkretnog izveštaja.
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
Tabela
```



