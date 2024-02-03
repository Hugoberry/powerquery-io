---
title: AzureEnterprise.Tables
---

# AzureEnterprise.Tables


## Description

Zadejte adresu URL koncového bodu Azure Enterprise REST API přidruženého vaší registraci.


## Syntax

```powerquery
AzureEnterprise.Tables(
    url as text
) as table
```


## Details

Vrátí seznam sestav a měsíců dostupných z rozhraní Azure Enterprise API.


## Examples

### Example #1 
Použití funkce AzureEnterprise.Tables a navigace k určité hodnotě kvůli získání výsledků
```powerquery
let
    Source = AzureEnterprise.Tables("http://ea.azure.com/rest/12345"),
    Contents = Source{[Key="Contents"]}[Data]
in
    Contents
```

Result: 
```powerquery
Tabulka
```



