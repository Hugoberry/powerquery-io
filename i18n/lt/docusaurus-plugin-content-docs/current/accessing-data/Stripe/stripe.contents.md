---
title: Stripe.Contents
---

# Stripe.Contents


Kreipiamasi į „Stripe“ API ir pateikiama galimybė apriboti atliktų API iškvietimų skaičių.


## Syntax

```powerquery
Stripe.Contents(
    method as text,
    optional query as record,
    optional pageLimit as number
) as table
```


## Remarks

Kreipiamasi į „Stripe“ API naudojant https://api.stripe.com/v1/`method`, pasirenkamas įrašas `query` pateikiamas kaip papildomi parametrai, o pasirenkama `pageLimit` reikšmė pateikiama kaip API užklausų skaičiaus limitas. Pirmiausia pateikiami naujausi duomenys. Jei `pageLimit` reikšmė nenurodyta, pateikiami visi duomenys. Naudojama „Stripe“ versija 2015-10-16.


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



