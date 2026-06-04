---
title: Marketo.Leads
---

# Marketo.Leads


Vrne tabelo s podrobnostmi možnih strank.


## Syntax

```powerquery
Marketo.Leads(
    url as text,
    leadIds as list,
    optional options as any
) as table
```


## Remarks

Pokliče končno točko vmesnika REST API za Marketo na naslovu `url`/rest/v1/leads.json. Vrnjene so vse možne stranke na seznamu `leadIds`.


## Examples

### Example #1
Prikaže podrobnosti za tri možne stranke
```powerquery
Marketo.Leads("https://100-AAA-999.mktorest.com/rest", {50, 2343, 88498})
```

Result: 
```powerquery
Tabela s podrobnostmi o navedenih možnih strankah
```



