---
title: Stripe.Contents
---

# Stripe.Contents


## Description

Zavolá rozhraní Stripe API, existuje možnost omezit počet provedených volání API.


## Syntax

```powerquery
Stripe.Contents(
    method as text,
    optional query as record,
    optional pageLimit as number
) as table
```


## Details

Zavolá rozhraní Stripe API na adrese https://api.stripe.com/v1/<code>metoda</code> s volitelným záznamem <code>dotaz</code>, předaným jako dodatečný parametr, a volitelným omezením počtu žádostí API <code>limit_stránek</code>. Nejnovější data jsou vrácena jako první. Není-li <code>limit_stránek</code> zadán, vrátí se všechna data. Použije se Stripe verze 2015-10-16.


## Examples

### Example #1 
Vrátí všechna data o poplatcích
```powerquery
Stripe.Contents("charges")
```

Result: 
```powerquery
Tabulka všech poplatků spojených s aktuálním účtem Stripe
```


### Example #2 
Vrátí jednu stránku dat poplatků
```powerquery
Stripe.Contents("charges", [], 1)
```

Result: 
```powerquery
Tabulka s nejnovějšími daty poplatků pro aktuální účet Stripe
```



