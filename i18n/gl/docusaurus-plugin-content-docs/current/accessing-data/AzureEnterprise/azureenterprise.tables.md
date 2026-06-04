---
title: AzureEnterprise.Tables
---

# AzureEnterprise.Tables


Escribe o URL do extremo da API de REST de Azure Enterprise asociado coa inscrición


## Syntax

```powerquery
AzureEnterprise.Tables(
    url as text
) as table
```


## Remarks

Devolve unha lista de informes e meses dispoñibles da API de Azure Enterprise


## Examples

### Example #1
Usar a función AzureEnterprise.Tables e navegar a un valor particular para obter os resultados.
```powerquery
let
    Source = AzureEnterprise.Tables("http://ea.azure.com/rest/12345"),
    Contents = Source{[Key="Contents"]}[Data]
in
    Contents
```

Result: 
```powerquery
Táboa
```



