---
title: Marketo.Leads
---

# Marketo.Leads


Az érdeklődési részleteket tartalmazó táblát adja vissza.


## Syntax

```powerquery
Marketo.Leads(
    url as text,
    leadIds as list,
    optional options as any
) as table
```


## Remarks

Hívást indít az `url`/rest/v1/leads.json címen található Marketo REST API végpontra. A rendszer a `leadIds` listában található minden érdeklődést visszaad.


## Examples

### Example #1
Három érdeklődés részleteit kérdezi le
```powerquery
Marketo.Leads("https://100-AAA-999.mktorest.com/rest", {50, 2343, 88498})
```

Result: 
```powerquery
A megadott érdeklődések részleteit tartalmazó tábla
```



