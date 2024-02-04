---
title: AzureEnterprise.Tables
---

# AzureEnterprise.Tables


## Description

Insira o URL do ponto final de API REST do Azure Enterprise associado à sua inscrição


## Syntax

```powerquery
AzureEnterprise.Tables(
    url as text
) as table
```


## Details

Devolve uma lista de relatórios e meses disponíveis da API do Azure Enterprise


## Examples

### Example #1 
Utilizar a função AzureEnterprise.Tables e navegar para um valor particular para obter os resultados.
```powerquery
let
    Source = AzureEnterprise.Tables("http://ea.azure.com/rest/12345"),
    Contents = Source{[Key="Contents"]}[Data]
in
    Conteúdos
```

Result: 
```powerquery
Tabela
```



