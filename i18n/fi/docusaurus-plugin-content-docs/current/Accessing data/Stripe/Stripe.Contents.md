---
title: Stripe.Contents
---

# Stripe.Contents


## Description

Tekee kutsun Stripen ohjelmointirajapinnalle niin, että tehtyjen ohjelmointirajapintakutsujen määrää voidaan rajoittaa.


## Syntax

```powerquery
Stripe.Contents(
    method as text,
    optional query as record,
    optional pageLimit as number
) as table
```


## Details

Tekee kutsun Stripe-ohjelmointirajapinnalle osoitteessa https://api.stripe.com/v1/<code>method</code> niin, että valinnainen tietue <code>query</code> voidaan välittää lisäparametreina ja valinnainen <code>pageLimit</code> ohjelmointirajapintapyyntöjen määrän rajana. Uusimmat tiedot palautetaan ensin. Jos kohdetta <code>pageLimit</code> ei määritetä, kaikki tiedot palautetaan. Stripe-versiota 2015-10-16 käytetään.


## Examples

### Example #1 
Palauttaa charges-tiedot
```powerquery
Stripe.Contents("charges")
```

Result: 
```powerquery
Taulukko, jossa on nykyisen Stripe-tilin kaikki charges-tiedot
```


### Example #2 
Palauttaa yhden sivun charges-tiedoista
```powerquery
Stripe.Contents("charges", [], 1)
```

Result: 
```powerquery
Taulukko, jossa on nykyisen Stripe-tilin uusimmat charges-tiedot
```



