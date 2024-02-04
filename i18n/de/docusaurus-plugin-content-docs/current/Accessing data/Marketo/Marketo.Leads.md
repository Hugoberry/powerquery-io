---
title: Marketo.Leads
---

# Marketo.Leads


## Description

Gibt eine Tabelle mit Leaddetails zurück.


## Syntax

```powerquery
Marketo.Leads(
    url as text,
    leadIds as list,
    optional options as any
) as table
```


## Details

Ruft den Marketo-REST-API-Endpunkt unter <code>url</code>/rest/v1/activities.json auf. Es werden alle Leads in Liste <code>leadIds</code> zurückgegeben.


## Examples

### Example #1 
Ruft die Details für drei Leads ab.
```powerquery
Marketo.Leads("https://100-AAA-999.mktorest.com/rest", {50, 2343, 88498})
```

Result: 
```powerquery
Eine Tabelle mit Details zu den bereitgestellten Leads.
```



