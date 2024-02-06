---
title: AzureEnterprise.Contents
---

# AzureEnterprise.Contents


Ange URL:en till den Azure Enterprise REST API-slutpunkt som är associerad till din registrering


## Syntax

```powerquery
AzureEnterprise.Contents(
    url as text,
    optional query as record
) as binary
```


## Remarks

Returnerar det binära resultatet för anropet till den URL som tillhandahållits för Azure Enterprise API:et.


## Examples

### Example #1 
Returnera resultatet för en specifik rapport genom att använda funktionen AzureEnterprise.Contents.
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
Tabell
```



