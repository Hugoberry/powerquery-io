---
title: AzureEnterprise.Contents
---

# AzureEnterprise.Contents


## Description

Adja meg a regisztrációhoz társított Azure Enterprise REST API-végpont URL-címét


## Syntax

```powerquery
AzureEnterprise.Contents(
    url as text,
    optional query as record
) as binary
```


## Details

Az Azure Enterprise API-hoz megadott URL-cím meghívásának bináris formátumú eredményeit adja vissza.


## Examples

### Example #1 
Az AzureEnterprise.Contents függvény használata adott jelentés eredményeinek lekéréséhez.
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
Tábla
```



