---
title: Marketo.Activities
---

# Marketo.Activities


## Description

Vrne tabelo z dejavnostmi možne stranke.


## Syntax

```powerquery
Marketo.Activities(
    url as text,
    startTime as date,
    activityIds as list
) as table
```


## Details

Pokliče končno točko vmesnika REST API za Marketo na naslovu <code>url</code>/rest/v1/activities.json. Vrnjene so vse dejavnosti na seznamu <code>activityIds</code>, ki so bile izvedene od datuma <code>startTime</code>.


## Examples

### Example #1 
Prikaže tabelo dejavnosti &#34;Obisk spletne strani&#34; od 1. novembra 2015
```powerquery
Marketo.Activities("https://100-AAA-999.mktorest.com/rest", #date(2015,11,1), {1})
```

Result: 
```powerquery
Tabela s podrobnostmi vseh dejavnosti »Obisk spletne strani« od 1. novembra
```



