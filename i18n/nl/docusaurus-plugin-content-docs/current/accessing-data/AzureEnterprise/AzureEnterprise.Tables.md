---
title: AzureEnterprise.Tables
---

# AzureEnterprise.Tables


Voer de URL van het Azure Enterprise REST API-eindpunt in dat is gekoppeld aan uw inschrijving


## Syntax

```powerquery
AzureEnterprise.Tables(
    url as text
) as table
```


## Remarks

Hiermee wordt een lijst met rapporten en maanden geretourneerd die beschikbaar zijn via de Azure Enterprise API


## Examples

### Example #1 
De functie AzureEnterprise.Tables gebruiken en naar een bepaalde waarde gaan om de resultaten op te halen.
```powerquery
let
    Source = AzureEnterprise.Tables("http://ea.azure.com/rest/12345"),
    Contents = Source{[Key="Contents"]}[Data]
in
    Contents
```

Result: 
```powerquery
Tabel
```



