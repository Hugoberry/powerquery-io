---
title: AzureEnterprise.Contents
---

# AzureEnterprise.Contents


## Description

Angiv URL-adressen til slutpunktet for den Azure Enterprise REST-API, der er knyttet til tilmeldingen


## Syntax

```powerquery
AzureEnterprise.Contents(
    url as text,
    optional query as record
) as binary
```


## Details

Returnerer de binære resultater af kaldet til den URL-adresse, der er angivet til Azure Enterprise-API'en.


## Examples

### Example #1 
Anvend funktionen AzureEnterprise.Contents til at returnere resultaterne af en specifik rapport.
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
Tabel
```



