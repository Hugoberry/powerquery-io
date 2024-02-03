---
title: AzureEnterprise.Tables
---

# AzureEnterprise.Tables


## Description

Įveskite „Azure Enterprise“ REST API galinio punkto, susieto su jūsų registracija, URL


## Syntax

```powerquery
AzureEnterprise.Tables(
    url as text
) as table
```


## Details

Pateikiamas ataskaitų ir mėnesių, pasiekiamų „Azure Enterprise“ API, sąrašas


## Examples

### Example #1 
Funkcijos „AzureEnterprise.Tables“ naudojimas ir perėjimas prie konkrečios reikšmės siekiant gauti rezultatų.
```powerquery
let
    Source = AzureEnterprise.Tables("http://ea.azure.com/rest/12345"),
    Contents = Source{[Key="Contents"]}[Data]
in
    Contents
```

Result: 
```powerquery
Lentelė
```



