---
title: Stripe.Contents
---

# Stripe.Contents


## Description

Ruft die Stripe-API auf, mit der Option zur Einschränkung der Anzahl von API-Aufrufen.


## Syntax

```powerquery
Stripe.Contents(
    method as text,
    optional query as record,
    optional pageLimit as number
) as table
```


## Details

Ruft die Stripe-API unter https://api.stripe.com/v1/<code>method</code> auf, wobei der optionale Datensatz <code>query</code> als zusätzlicher Parameter und der optionale Wert <code>pageLimit</code> als Grenzwert für die Anzahl von API-Anforderungen übergeben werden. Die neuesten Daten werden zuerst zurückgegeben. Wenn <code>pageLimit</code> nicht angegeben wird, werden alle Daten zurückgegeben. Es wird Stripe-Version 2015-10-16 verwendet.


## Examples

### Example #1 
Gibt alle Gebührendaten zurück.
```powerquery
Stripe.Contents("charges")
```

Result: 
```powerquery
Eine Tabelle mit sämtlichen Gebührendaten für das aktuelle Stripe-Konto.
```


### Example #2 
Gibt eine Seite mit Gebührendaten zurück.
```powerquery
Stripe.Contents("charges", [], 1)
```

Result: 
```powerquery
Eine Tabelle mit den neuesten Gebührendaten für das aktuelle Stripe-Konto.
```



