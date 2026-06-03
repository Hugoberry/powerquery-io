---
title: Marketo.Leads
---

# Marketo.Leads


Returnerar en tabell med leadinformation.


## Syntax

```powerquery
Marketo.Leads(
    url as text,
    leadIds as list,
    optional options as any
) as table
```


## Remarks

Anropar Marketo REST API-slutpunkten på `url`/rest/v1/leads.json. Alla leads i listan `leadIds` returneras.


## Examples

### Example #1
Hämtar information om tre leads
```powerquery
Marketo.Leads("https://100-AAA-999.mktorest.com/rest", {50, 2343, 88498})
```

Result: 
```powerquery
En tabell med information om tillhandahållna leads
```



