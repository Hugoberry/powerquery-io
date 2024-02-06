---
title: AzureEnterprise.Tables
---

# AzureEnterprise.Tables


Digite a URL do ponto de extremidade da API REST do Azure Enterprise associada ao seu registro


## Syntax

```powerquery
AzureEnterprise.Tables(
    url as text
) as table
```


## Remarks

Retorna uma lista de relatórios e meses disponíveis da API do Azure Enterprise


## Examples

### Example #1 
Usando a função AzureEnterprise.Tables e navegando até um determinado valor para obter os resultados.
```powerquery
Fonte
    de let = AzureEnterprise.Tables("http://ea.azure.com/rest/12345"),
    Sumário = Fonte{[Key="Contents"]}[Data]
em
    Sumário
```

Result: 
```powerquery
Tabela
```



