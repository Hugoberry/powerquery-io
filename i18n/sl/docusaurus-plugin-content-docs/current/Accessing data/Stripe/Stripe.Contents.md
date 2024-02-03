---
title: Stripe.Contents
---

# Stripe.Contents


## Description

Pokliče vmesnik API za Stripe z možnostjo omejitve števila klicev končne točke vmesnika API.


## Syntax

```powerquery
Stripe.Contents(
    method as text,
    optional query as record,
    optional pageLimit as number
) as table
```


## Details

Pokliče vmesnik API za Stripe na naslovu https://api.stripe.com/v1/<code>method</code> z izbirnim zapisom <code>query</code> kot dodatnim parametrom in izbirnim elementom <code>pageLimit</code> kot omejitvijo števila zahtev vmesnika API. Najprej so vrnjeni najnovejši podatki. Če element <code>pageLimit</code> ni določen, so vrnjeni vsi podatki. Uporabljena je različica Stripe 2015-10-16.


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



