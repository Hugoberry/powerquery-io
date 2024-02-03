---
title: MailChimp.Collection
---

# MailChimp.Collection


## Description

Hiermee wordt een tabel van een MailChimp-eindpunt geretourneerd.


## Syntax

```powerquery
MailChimp.Collection(
    path as text,
    optional entityName as text
) as table
```


## Details

Hiermee wordt een aanroep uitgevoerd naar de MailChimp-API en wordt de resulterende gegevensset als tabel geretourneerd. Alle resultaten worden automatisch verwerkt. De optionele entityName-parameter kan worden gebruikt voor API-eindpunten waarbij het hoofdeindpunt en de hoofd-entityName in het JSON-antwoord niet overeenkomen.


## Examples

### Example #1 
Hiermee wordt een tabel met gegevens opgehaald uit het eindpunt met lijsten van de MailChimp-API.
```powerquery
MailChimp.Collection(lijsten)
```

Result: 
```powerquery
Een tabel met lijstgegevens.
```


### Example #2 
Hiermee wordt een tabel met gegevens opgehaald uit het eindpunt met campagnemappen van de MailChimp-API.
```powerquery
MailChimp.Collection(campagnemappen, mappen)
```

Result: 
```powerquery
Een tabel met gegevens van campagnemappen.
```



