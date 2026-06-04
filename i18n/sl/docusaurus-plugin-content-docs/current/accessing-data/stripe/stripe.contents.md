---
title: Stripe.Contents
---

# Stripe.Contents


Pokliče vmesnik API za Stripe z možnostjo omejitve števila klicev končne točke vmesnika API.


## Syntax

```powerquery
Stripe.Contents(
    method as text,
    optional query as record,
    optional pageLimit as number
) as table
```


## Remarks

Pokliče vmesnik API za Stripe na naslovu https://api.stripe.com/v1/`method` z izbirnim zapisom `query` kot dodatnim parametrom in izbirnim elementom `pageLimit` kot omejitvijo števila zahtev vmesnika API. Najprej so vrnjeni najnovejši podatki. Če element `pageLimit` ni določen, so vrnjeni vsi podatki. Uporabljena je različica Stripe 2015-10-16.


## Examples

### Example #1
Vrne podatke o vseh stroških
```powerquery
Stripe.Contents("charges")
```

Result: 
```powerquery
Tabela s podatki o vseh stroških za trenutni račun Stripe
```


### Example #2
Vrne eno stran podatkov o stroških
```powerquery
Stripe.Contents("charges", [], 1)
```

Result: 
```powerquery
Tabela z najnovejšimi podatki o stroških za trenutni račun Stripe
```



