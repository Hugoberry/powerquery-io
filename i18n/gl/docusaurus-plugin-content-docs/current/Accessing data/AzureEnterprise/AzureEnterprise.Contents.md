---
title: AzureEnterprise.Contents
---

# AzureEnterprise.Contents


## Description

Escribe o URL do extremo da API de REST de Azure Enterprise asociado coa inscrición


## Syntax

```powerquery
AzureEnterprise.Contents(
    url as text,
    optional query as record
) as binary
```


## Details

Devolve os resultados binarios da chamada ao URL fornecido pola API de Azure Enterprise.


## Examples

### Example #1 
Usar a función AzureEnterprise.Contents para devolver os resultados dun informe específico.
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
Táboa
```



