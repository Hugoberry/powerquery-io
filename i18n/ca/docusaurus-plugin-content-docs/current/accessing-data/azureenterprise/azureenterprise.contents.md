---
title: AzureEnterprise.Contents
---

# AzureEnterprise.Contents


Introduïu l'URL de l'extrem de l'API de REST de l'Azure Enterprise associada amb la inscripció.


## Syntax

```powerquery
AzureEnterprise.Contents(
    url as text,
    optional query as record
) as binary
```


## Remarks

Retorna els resultats binaris de la trucada a l'URL proporcionada per a l'API de l'Azure Enterprise.


## Examples

### Example #1
Ús de la funció AzureEnterprise.Contents per retornar els resultats d'un informe específic.
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



