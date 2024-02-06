---
title: Marketo.Leads
---

# Marketo.Leads


Hiermee wordt een tabel met leaddetails geretourneerd.


## Syntax

```powerquery
Marketo.Leads(
    url as text,
    leadIds as list,
    optional options as any
) as table
```


## Remarks

Hiermee wordt het eindpunt van de Marketo REST API op <code>url</code>/rest/v1/leads.json aangeroepen. Alle leads in de lijst <code>leadIds</code> worden geretourneerd.


## Examples

### Example #1 
Hiermee worden de details voor drie leads opgehaald
```powerquery
Marketo.Leads("https://100-AAA-999.mktorest.com/rest", {50, 2343, 88498})
```

Result: 
```powerquery
Een tabel met details voor de opgegeven leads
```



