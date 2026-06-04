---
title: Marketo.Leads
---

# Marketo.Leads


Mengembalikan tabel dengan rincian prospek.


## Syntax

```powerquery
Marketo.Leads(
    url as text,
    leadIds as list,
    optional options as any
) as table
```


## Remarks

Melakukan panggilan ke titik akhir Marketo REST API di `url`/rest/v1/leads.json. Semua prospek dalam daftar `leadIds` dikembalikan.


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



