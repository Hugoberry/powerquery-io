---
title: Stripe.Contents
---

# Stripe.Contents


Foretager et kald til Stripe API'en, med mulighed for at begrænse antallet af API-kald.


## Syntax

```powerquery
Stripe.Contents(
    method as text,
    optional query as record,
    optional pageLimit as number
) as table
```


## Remarks

Foretager et opkald til Stripe-API'en på https://api.stripe.com/v1/`metode`, hvor den valgfri post `forespørgsel` er godkendt som yderligere parametre og den valgfri `pageLimit` udgør grænsen for antallet af API-forespørgsler. De nyeste data returneres først. Hvis `pageLimit` ikke er angivet, returneres alle data. Stripe-version 2015-10-16 anvendes.


## Examples

### Example #1
Returnerer alle gebyrdata
```powerquery
Stripe.Contents("charges")
```

Result: 
```powerquery
En tabel med alle gebyrdata for den aktuelle Stripe-konto
```


### Example #2
Returnerer én side med gebyrdata
```powerquery
Stripe.Contents("charges", [], 1)
```

Result: 
```powerquery
En tabel med de nyeste gebyrdata for den aktuelle Stripe-konto
```



