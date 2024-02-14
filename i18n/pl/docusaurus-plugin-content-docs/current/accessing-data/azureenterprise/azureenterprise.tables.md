---
title: AzureEnterprise.Tables
---

# AzureEnterprise.Tables


Wprowadź adres URL punktu końcowego interfejsu API REST usługi Azure Enterprise skojarzonego z Twoją rejestracją


## Syntax

```powerquery
AzureEnterprise.Tables(
    url as text
) as table
```


## Remarks

Zwraca listę dostępnych raportów i miesięcy z interfejsu API usługi Azure Enterprise


## Examples

### Example #1 
Użycie funkcji AzureEnterprise.Tables i przejście do konkretnej wartości w celu uzyskania wyników.
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



