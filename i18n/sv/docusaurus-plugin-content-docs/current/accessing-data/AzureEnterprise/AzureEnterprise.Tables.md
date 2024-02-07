---
title: AzureEnterprise.Tables
---

# AzureEnterprise.Tables


Ange URL:en till den Azure Enterprise REST API-slutpunkt som är associerad till din registrering


## Syntax

```powerquery
AzureEnterprise.Tables(
    url as text
) as table
```


## Remarks

Returnerar en lista över rapporter och månader som är tillgängliga från Azure Enterprise-API:et


## Examples

### Example #1 
Använd funktionen AzureEnterprise.Tables och navigera till ett visst värde för att få resultaten.
```powerquery
let
    Source = AzureEnterprise.Tables("http://ea.azure.com/rest/12345"),
    Contents = Source{[Key="Contents"]}[Data]
in
    Contents
```

Result: 
```powerquery
Tabell
```



