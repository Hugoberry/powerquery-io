---
title: Marketo.Activities
---

# Marketo.Activities


## Description

Mengembalikan tabel dengan aktivitas lead.


## Syntax

```powerquery
Marketo.Activities(
    url as text,
    startTime as date,
    activityIds as list
) as table
```


## Details

Melakukan panggilan ke titik akhir Marketo REST API di <code>url</code>/rest/v1/activities.json. Semua aktivitas dalam daftar <code>activityIds</code> yang muncul sejak <code>startTime</code> dikembalikan.


## Examples

### Example #1 
Menarik tabel aktivitas &#34;Kunjungan Situs Web&#34; sejak 1 November 2015
```powerquery
Marketo.Activities("https://100-AAA-999.mktorest.com/rest", #date(2015,11,1), {1})
```

Result: 
```powerquery
Tabel dengan aktivitas "Kunjungi Situs Web" sejak 1 November
```



