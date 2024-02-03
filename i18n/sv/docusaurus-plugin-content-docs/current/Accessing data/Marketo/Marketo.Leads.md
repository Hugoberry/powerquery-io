---
title: Marketo.Leads
---

# Marketo.Leads


## Description

Returnerar en tabell med leadinformation.


## Syntax

```powerquery
Marketo.Leads(
    url as text,
    leadIds as list,
    optional options as any
) as table
```


## Details

Anropar Marketo REST API-slutpunkten på <code>url</code>/rest/v1/leads.json. Alla leads i listan <code>leadIds</code> returneras.


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



