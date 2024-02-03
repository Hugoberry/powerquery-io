---
title: Marketo.Leads
---

# Marketo.Leads


## Description

Pateikiama lentelė su galimų klientų informacija.


## Syntax

```powerquery
Marketo.Leads(
    url as text,
    leadIds as list,
    optional options as any
) as table
```


## Details

Kreipiamasi į „Marketo“ REST API galinį punktą naudojant <code>url</code>/rest/v1/leads.json. Pateikiami visi galimi klientai, esantys sąraše <code>leadIds</code>.


## Examples

### Example #1 
Pateikiama trijų galimų klientų informacija.
```powerquery
Marketo.Leads("https://100-AAA-999.mktorest.com/rest", {50, 2343, 88498})
```

Result: 
```powerquery
Lentelė su pateiktų galimų klientų informacija
```



