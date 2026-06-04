---
title: Stripe.Contents
---

# Stripe.Contents


Hívást indít a Stripe API-ra. Az elindított API-hívások száma korlátozható.


## Syntax

```powerquery
Stripe.Contents(
    method as text,
    optional query as record,
    optional pageLimit as number
) as table
```


## Remarks

Hívást indít a https://api.stripe.com/v1/`method` címen található Stripe API-ra. A `query` rekorddal további paramétereket továbbíthat, a `pageLimit` elemmel pedig az API-kérések számát korlátozhatja, ha szeretné. A rendszer először a legfrissebb adatokat adja vissza. Ha a `pageLimit` nincs megadva, minden adatot visszaad. A Stripe 2015-10-16-os verziója van használatban.


## Examples

### Example #1
A díjtételekre vonatkozó adatokat adja vissza.
```powerquery
Stripe.Contents("charges")
```

Result: 
```powerquery
Az aktuális Stripe-fiók díjtételekre vonatkozó adatait tartalmazó tábla
```


### Example #2
Egy oldalnyi, díjtételekre vonatkozó adatot ad vissza.
```powerquery
Stripe.Contents("charges", [], 1)
```

Result: 
```powerquery
Az aktuális Stripe-fiók legutóbbi díjtételeire vonatkozó adatokat tartalmazó tábla
```



