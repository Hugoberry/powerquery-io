---
title: Marketo.Leads
---

# Marketo.Leads


## Description

Returnerer en tabel med oplysninger om kundeemner.


## Syntax

```powerquery
Marketo.Leads(
    url as text,
    leadIds as list,
    optional options as any
) as table
```


## Details

Foretager et kald til Marketo REST API-slutpunktet på <code>url</code>/rest/v1/leads.json. Alle kundeemner på listen <code>leadIds</code> returneres.


## Examples

### Example #1 
Udtrækker oplysninger om tre kundeemner
```powerquery
Marketo.Leads("https://100-AAA-999.mktorest.com/rest", {50, 2343, 88498})
```

Result: 
```powerquery
En tabel med oplysninger om de angivne kundeemner
```



