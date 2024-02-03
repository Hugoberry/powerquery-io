---
title: AzureEnterprise.Contents
---

# AzureEnterprise.Contents


## Description

Introduïu l&#39;URL de l&#39;extrem de l&#39;API de REST de l&#39;Azure Enterprise associada amb la inscripció.


## Syntax

```powerquery
AzureEnterprise.Contents(
    url as text,
    optional query as record
) as binary
```


## Details

Retorna els resultats binaris de la trucada a l'URL proporcionada per a l'API de l'Azure Enterprise.


## Examples

### Example #1 
Ús de la funció AzureEnterprise.Contents per retornar els resultats d&#39;un informe específic.
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
Taula
```



