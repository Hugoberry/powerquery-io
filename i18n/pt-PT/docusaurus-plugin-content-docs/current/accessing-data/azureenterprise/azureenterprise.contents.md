---
title: AzureEnterprise.Contents
---

# AzureEnterprise.Contents


Insira o URL do ponto final de API REST do Azure Enterprise associado à sua inscrição


## Syntax

```powerquery
AzureEnterprise.Contents(
    url as text,
    optional query as record
) as binary
```


## Remarks

Devolve os resultados binários para chamar o url fornecido para a API do Azure Enterprise.


## Examples

### Example #1 
Utilizar a função AzureEnterprise.Contents para devolver os resultados de um relatório específico.
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



