---
title: Marketo.Leads
---

# Marketo.Leads


Mengembalikan jadual dengan butiran berita utama.


## Syntax

```powerquery
Marketo.Leads(
    url as text,
    leadIds as list,
    optional options as any
) as table
```


## Remarks

Buat panggilan kepada titik akhir Marketo REST API di `url`/rest/v1/leads.json. Semua berita utama dalam senarai `leadIds` telah dikembalikan.


## Examples

### Example #1
Menarik butiran bagi tiga berita utama
```powerquery
Marketo.Leads("https://100-AAA-999.mktorest.com/rest", {50, 2343, 88498})
```

Result: 
```powerquery
Jadual dengan butiran bagi berita utama yang dibekalkan
```



