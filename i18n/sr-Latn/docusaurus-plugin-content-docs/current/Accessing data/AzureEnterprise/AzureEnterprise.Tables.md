---
title: AzureEnterprise.Tables
---

# AzureEnterprise.Tables


## Description

Unos URL-a krajnje tačke Azure Enterprise REST API-ja povezane sa upisnicom


## Syntax

```powerquery
AzureEnterprise.Tables(
    url as text
) as table
```


## Details

Vraća listu izveštaja i meseci dostupnih iz Azure Enterprise API-ja


## Examples

### Example #1 
Upotreba funkcije AzureEnterprise.Tables i navigacija do određene vrednosti radi dobijanja rezultata.
```powerquery
let
    Source = AzureEnterprise.Tables("http://ea.azure.com/rest/12345"),
    Contents = Source{[Key="Contents"]}[Data]
in
    Contents
```

Result: 
```powerquery
Tabela
```



