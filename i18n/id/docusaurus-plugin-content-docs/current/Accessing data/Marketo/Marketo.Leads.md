---
title: Marketo.Leads
---

# Marketo.Leads


## Description

Mengembalikan tabel dengan rincian prospek.


## Syntax

```powerquery
Marketo.Leads(
    url as text,
    leadIds as list,
    optional options as any
) as table
```


## Details

Melakukan panggilan ke titik akhir Marketo REST API di <code>url</code>/rest/v1/leads.json. Semua prospek dalam daftar <code>leadIds</code> dikembalikan.


## Examples

### Example #1 
Tarik rincian untuk tiga lead
```powerquery
Marketo.Leads("https://100-AAA-999.mktorest.com/rest", {50, 2343, 88498})
```

Result: 
```powerquery
Tabel dengan rincian untuk lead yang diberikan
```



