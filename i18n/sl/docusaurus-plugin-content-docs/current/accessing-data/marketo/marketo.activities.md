---
title: Marketo.Activities
---

# Marketo.Activities


Vrne tabelo z dejavnostmi možne stranke.


## Syntax

```powerquery
Marketo.Activities(
    url as text,
    startTime as date,
    activityIds as list
) as table
```


## Remarks

Pokliče končno točko vmesnika REST API za Marketo na naslovu `url`/rest/v1/activities.json. Vrnjene so vse dejavnosti na seznamu `activityIds`, ki so bile izvedene od datuma `startTime`.


## Examples

### Example #1
Prikaže tabelo dejavnosti"Obisk spletne strani"od 1. novembra 2015
```powerquery
Marketo.Activities("https://100-AAA-999.mktorest.com/rest", #date(2015,11,1), {1})
```

Result: 
```powerquery
Tabela s podrobnostmi vseh dejavnosti »Obisk spletne strani« od 1. novembra
```



