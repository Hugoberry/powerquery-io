---
title: AzureEnterprise.Contents
---

# AzureEnterprise.Contents


## Description

Digite a URL do ponto de extremidade da API REST do Azure Enterprise associada ao seu registro


## Syntax

```powerquery
AzureEnterprise.Contents(
    url as text,
    optional query as record
) as binary
```


## Details

Retorna os resultados binários da chamada para a url fornecida para a API do Azure Enterprise.


## Examples

### Example #1 
Usando a função AzureEnterprise.Contents para retornar os resultados de um relatório específico.
```powerquery
        relatório
            de let = Table.FromColumns({Lines.FromBinary(Binary.Buffer(AzureEnterprise.Contents("https://ea.azure.com/rest/12345/usage-report", [month="2014-04", type="summary", fmt="Csv"])),null,null,1252)}),
            ignora = Table.Skip(relatório, 2),
            divide =  Table.SplitColumn(skips, "Column1", Splitter.SplitTextByDelimiter(",", QuoteStyle.Csv)),
            promovido = Table.PromoteHeaders(split)
        em
            promovido
```

Result: 
```powerquery
Tabela
```



