---
title: Marketo.Leads
---

# Marketo.Leads


Gibt eine Tabelle mit Leaddetails zurück.


## Syntax

```powerquery
Marketo.Leads(
    url as text,
    leadIds as list,
    optional options as any
) as table
```


## Remarks

Ruft den Marketo-REST-API-Endpunkt unter `url`/rest/v1/activities.json auf. Es werden alle Leads in Liste `leadIds` zurückgegeben.


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



