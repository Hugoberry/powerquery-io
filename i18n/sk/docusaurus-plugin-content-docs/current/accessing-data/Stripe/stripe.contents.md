---
title: Stripe.Contents
---

# Stripe.Contents


Uskutočňovanie volania do rozhrania Stripe API s možnosťou obmedziť počet uskutočnených volaní do rozhrania API.


## Syntax

```powerquery
Stripe.Contents(
    method as text,
    optional query as record,
    optional pageLimit as number
) as table
```


## Remarks

Uskutočňovanie volania do rozhrania Stripe API na adrese https://api.stripe.com/v1/`method` s voliteľným záznamom `query`, ktorý predstavuje dodatočné parametre, a voliteľným poľom `pageLimit`, ktoré limituje počet požiadaviek rozhrania API. Ako prvé sa vrátia najnovšie údaje. Ak v poli `pageLimit` nie je zadaná žiadna hodnota, vrátia sa všetky údaje. Používa sa Stripe verzie 2015-10-16.


## Examples

### Example #1
Vráti všetky údaje o poplatkoch
```powerquery
Stripe.Contents("charges")
```

Result: 
```powerquery
Tabuľka so všetkými údajmi o poplatkoch v aktuálnom konte Stripe
```


### Example #2
Vráti jednu stránku s údajmi o poplatkoch
```powerquery
Stripe.Contents("charges", [], 1)
```

Result: 
```powerquery
Tabuľka s poslednými zmenami údajov v aktuálnom konte Stripe
```



