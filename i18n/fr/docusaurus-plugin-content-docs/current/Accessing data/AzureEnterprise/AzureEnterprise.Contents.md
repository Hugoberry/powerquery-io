---
title: AzureEnterprise.Contents
---

# AzureEnterprise.Contents


## Description

Entrer l&#39;URL du point de terminaison de l&#39;API REST Azure Enterprise associé à votre inscription


## Syntax

```powerquery
AzureEnterprise.Contents(
    url as text,
    optional query as record
) as binary
```


## Details

Retourne les résultats binaires de l'appel à l'URL fournie pour l'API Azure Enterprise.


## Examples

### Example #1 
Utilisation de la fonction AzureEnterprise.Contents pour retourner les résultats d&#39;un rapport spécifique.
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
Table
```



