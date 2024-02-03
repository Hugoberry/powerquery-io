---
title: AzureEnterprise.Tables
---

# AzureEnterprise.Tables


## Description

Vnesite URL končne točke vmesnika REST API za Azure Enterprise, ki je povezan z vašo včlanitvijo


## Syntax

```powerquery
AzureEnterprise.Tables(
    url as text
) as table
```


## Details

Vrne seznam poročil in mesecev, ki so na voljo v vmesniku API za Azure Enterprise


## Examples

### Example #1 
Uporabite funkcijo &#34;AzureEnterprise.Tables&#34;, da poiščete določeno vrednost za pridobitev rezultatov.
```powerquery
let
    Vir = AzureEnterprise.Tables("http://ea.azure.com/rest/12345"),
    Vsebina = Vir{[Key="Contents"]}[Podatki]
in
    Vsebina
```

Result: 
```powerquery
Tabela
```



