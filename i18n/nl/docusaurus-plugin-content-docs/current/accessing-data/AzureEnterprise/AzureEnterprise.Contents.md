---
title: AzureEnterprise.Contents
---

# AzureEnterprise.Contents


Voer de URL van het Azure Enterprise REST API-eindpunt in dat is gekoppeld aan uw inschrijving


## Syntax

```powerquery
AzureEnterprise.Contents(
    url as text,
    optional query as record
) as binary
```


## Remarks

Hiermee worden de binaire resultaten van de aanroep naar de opgegeven URL voor de Azure Enterprise API geretourneerd.


## Examples

### Example #1 
De resultaten van een specifiek rapport retourneren met de functie AzureEnterprise.Contents.
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



