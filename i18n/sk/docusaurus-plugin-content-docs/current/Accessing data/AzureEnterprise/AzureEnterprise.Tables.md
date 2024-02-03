---
title: AzureEnterprise.Tables
---

# AzureEnterprise.Tables


## Description

Zadajte URL adresu koncového bodu rozhrania Azure Enterprise REST API, ktorý je priradený k vašej registrácii.


## Syntax

```powerquery
AzureEnterprise.Tables(
    url as text
) as table
```


## Details

Vráti zoznam zostáv a mesiacov, ktoré sú k dispozícii z rozhrania Azure Enterprise API


## Examples

### Example #1 
Použitie funkcie AzureEnterprise.Tables a prechod na konkrétnu hodnotu na získanie výsledkov.
```powerquery
let
    Source = AzureEnterprise.Tables("http://ea.azure.com/rest/12345"),
    Contents = Source{[Key="Contents"]}[Data]
in
    Contents
```

Result: 
```powerquery
Tabuľka
```



