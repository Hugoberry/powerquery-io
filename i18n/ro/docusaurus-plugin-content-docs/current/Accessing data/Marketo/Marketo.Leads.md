---
title: Marketo.Leads
---

# Marketo.Leads


## Description

Returnează un tabel cu detaliile clientului potențial.


## Syntax

```powerquery
Marketo.Leads(
    url as text,
    leadIds as list,
    optional options as any
) as table
```


## Details

Creează un apel către punctul final API Marketo REST de la <code>url</code>/rest/v1/leads.json. Sunt returnați toți clienții potențiali din lista <code>IDuriCliențiPotențiali</code>.


## Examples

### Example #1 
Extrage detaliile pentru trei clienți potențiali
```powerquery
Marketo.Leads("https://100-AAA-999.mktorest.com/rest", {50, 2343, 88498})
```

Result: 
```powerquery
Un tabel cu detaliile pentru clienții potențiali furnizați
```



