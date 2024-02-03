---
title: AzureEnterprise.Contents
---

# AzureEnterprise.Contents


## Description

Zadajte URL adresu koncového bodu rozhrania Azure Enterprise REST API, ktorý je priradený k vašej registrácii.


## Syntax

```powerquery
AzureEnterprise.Contents(
    url as text,
    optional query as record
) as binary
```


## Details

Vráti binárne výsledky volania URL adresy poskytovanej pre rozhranie Azure Enterprise API.


## Examples

### Example #1 
Vrátenie výsledkov konkrétnej zostavy pomocou funkcie AzureEnterprise.Contents.
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
Tabuľka
```



