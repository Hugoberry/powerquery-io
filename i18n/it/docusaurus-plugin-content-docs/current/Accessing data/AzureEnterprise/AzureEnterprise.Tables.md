---
title: AzureEnterprise.Tables
---

# AzureEnterprise.Tables


Specificare l&#39;URL dell&#39;endpoint API REST Azure Enterprise associato alla registrazione


## Syntax

```powerquery
AzureEnterprise.Tables(
    url as text
) as table
```


## Remarks

Restituisce un elenco di report e mesi disponibili dall'API Azure Enterprise


## Examples

### Example #1 
Utilizzo della funzione AzureEnterprise.Tables e spostamento su un valore specifico per ottenere i risultati.
```powerquery
let
    Source = AzureEnterprise.Tables("http://ea.azure.com/rest/12345"),
    Contents = Source{[Key="Contents"]}[Data]
in
    Contents
```

Result: 
```powerquery
Tabella
```



