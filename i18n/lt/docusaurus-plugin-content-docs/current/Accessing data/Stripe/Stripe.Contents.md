---
title: Stripe.Contents
---

# Stripe.Contents


## Description

Kreipiamasi į „Stripe“ API ir pateikiama galimybė apriboti atliktų API iškvietimų skaičių.


## Syntax

```powerquery
Stripe.Contents(
    method as text,
    optional query as record,
    optional pageLimit as number
) as table
```


## Details

Kreipiamasi į „Stripe“ API naudojant https://api.stripe.com/v1/<code>method</code>, pasirenkamas įrašas <code>query</code> pateikiamas kaip papildomi parametrai, o pasirenkama <code>pageLimit</code> reikšmė pateikiama kaip API užklausų skaičiaus limitas. Pirmiausia pateikiami naujausi duomenys. Jei <code>pageLimit</code> reikšmė nenurodyta, pateikiami visi duomenys. Naudojama „Stripe“ versija 2015-10-16.


## Examples

### Example #1 
Pateikiami visi mokesčių duomenys.
```powerquery
Stripe.Contents("charges")
```

Result: 
```powerquery
Lentelė su visais mokesčių duomenimis, susijusiais su dabartine „Stripe“ paskyra
```


### Example #2 
Pateikiamas vienas mokesčių duomenų puslapis.
```powerquery
Stripe.Contents("charges", [], 1)
```

Result: 
```powerquery
Lentelė su naujausiais mokesčių duomenimis, susijusiais su dabartine „Stripe“ paskyra
```



