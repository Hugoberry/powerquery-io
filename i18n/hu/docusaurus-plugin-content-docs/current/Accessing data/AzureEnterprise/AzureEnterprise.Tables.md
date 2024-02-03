---
title: AzureEnterprise.Tables
---

# AzureEnterprise.Tables


## Description

Adja meg a regisztrációhoz társított Azure Enterprise REST API-végpont URL-címét


## Syntax

```powerquery
AzureEnterprise.Tables(
    url as text
) as table
```


## Details

Az elérhető hónapok és jelentések listáját adja vissza az Azure Enterprise API-ból


## Examples

### Example #1 
Az AzureEnterprise.Tables függvény használata és navigálás egy adott értékhez az eredmények megszerzése érdekében.
```powerquery
let
    Source = AzureEnterprise.Tables("http://ea.azure.com/rest/12345"),
    Contents = Source{[Key="Contents"]}[Data]
in
    Contents
```

Result: 
```powerquery
Tábla
```



