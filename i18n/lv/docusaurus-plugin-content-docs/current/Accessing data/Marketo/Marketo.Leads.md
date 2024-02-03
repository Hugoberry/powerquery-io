---
title: Marketo.Leads
---

# Marketo.Leads


## Description

Šī funkcija atgriež tabulu ar informāciju par potenciālajiem klientiem.


## Syntax

```powerquery
Marketo.Leads(
    url as text,
    leadIds as list,
    optional options as any
) as table
```


## Details

Šī funkcija izsauc Marketo REST API galapunktu adresē <code>URL</code>/rest/v1/leads.json. Tiek atgriezti visi potenciālie klienti sarakstā <code>leadIds</code>.


## Examples

### Example #1 
Šī funkcija atgādā detalizētu informāciju par trim potenciālajiem klientiem
```powerquery
Marketo.Leads("https://100-AAA-999.mktorest.com/rest", {50, 2343, 88498})
```

Result: 
```powerquery
Tabula ar detalizētu informāciju par norādītajiem potenciālajiem klientiem
```



