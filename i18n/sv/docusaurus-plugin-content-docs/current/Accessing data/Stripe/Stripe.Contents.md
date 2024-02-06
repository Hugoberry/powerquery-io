---
title: Stripe.Contents
---

# Stripe.Contents


Anropar Stripe-API:et, med alternativet att begränsa antalet gjorda API-anrop.


## Syntax

```powerquery
Stripe.Contents(
    method as text,
    optional query as record,
    optional pageLimit as number
) as table
```


## Remarks

Anropar Stripe-API:et på https://api.stripe.com/v1/<code>method</code>, med den alternativa posten <code>query</code> överförd som extra parametrar och valfria <code>pageLimit</code> som gräns för antalet API-förfrågningar. Senaste data returneras först. Om <code>pageLimit</code> inte anges returneras alla data. Stripe-version 2015-10-16 används.


## Examples

### Example #1 
Returnerar alla debiteringsdata
```powerquery
Stripe.Contents("charges")
```

Result: 
```powerquery
En tabell med alla debiteringsdata för det aktuella Stripe-kontot
```


### Example #2 
Returnerar en sida med debiteringsdata
```powerquery
Stripe.Contents("charges", [], 1)
```

Result: 
```powerquery
En tabell med senaste debiteringsdata för det aktuella Stripe-kontot
```



