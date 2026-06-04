---
title: Stripe.Contents
---

# Stripe.Contents


Zavolá rozhraní Stripe API, existuje možnost omezit počet provedených volání API.


## Syntax

```powerquery
Stripe.Contents(
    method as text,
    optional query as record,
    optional pageLimit as number
) as table
```


## Remarks

Zavolá rozhraní Stripe API na adrese https://api.stripe.com/v1/`metoda` s volitelným záznamem `dotaz`, předaným jako dodatečný parametr, a volitelným omezením počtu žádostí API `limit_stránek`. Nejnovější data jsou vrácena jako první. Není-li `limit_stránek` zadán, vrátí se všechna data. Použije se Stripe verze 2015-10-16.


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



