---
title: AzureEnterprise.Tables
---

# AzureEnterprise.Tables


Anna rekisteröintiisi liittyvän Azure Enterprise REST -sovellusrajapinnan päätepisteen URL-osoite


## Syntax

```powerquery
AzureEnterprise.Tables(
    url as text
) as table
```


## Remarks

Palauttaa Azure Enterprise -ohjelmointirajapinnasta käytettävissä olevien raporttien ja kuukausien luettelon


## Examples

### Example #1
Käytetään AzureEnterprise.Tables-funktiota ja siirrytään tiettyyn arvoon tulosten saamista varten.
```powerquery
let
    Source = AzureEnterprise.Tables("http://ea.azure.com/rest/12345"),
    Contents = Source{[Key="Contents"]}[Data]
in
    Contents
```

Result: 
```powerquery
Taulukko
```



