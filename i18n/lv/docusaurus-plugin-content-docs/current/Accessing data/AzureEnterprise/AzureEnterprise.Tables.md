---
title: AzureEnterprise.Tables
---

# AzureEnterprise.Tables


## Description

Ievadiet ar reģistrāciju saistītā Azure Enterprise REST API galapunkta vietrādi URL


## Syntax

```powerquery
AzureEnterprise.Tables(
    url as text
) as table
```


## Details

Atgriež saskarnē Azure Enterprise API pieejamo atskaišu un mēnešu sarakstu


## Examples

### Example #1 
Funkcijas AzureEnterprise.Tables izmantošana un pāriešana uz noteiktu vērtību, lai iegūtu rezultātus.
```powerquery
let
    Source = AzureEnterprise.Tables("http://ea.azure.com/rest/12345"),
    Contents = Source{[Key="Contents"]}[Data]
in
    Contents
```

Result: 
```powerquery
Tabula
```



