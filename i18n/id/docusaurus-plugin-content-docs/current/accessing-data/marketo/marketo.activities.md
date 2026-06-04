---
title: Marketo.Activities
---

# Marketo.Activities


Mengembalikan tabel dengan aktivitas lead.


## Syntax

```powerquery
Marketo.Activities(
    url as text,
    startTime as date,
    activityIds as list
) as table
```


## Remarks

Melakukan panggilan ke titik akhir Marketo REST API di `url`/rest/v1/activities.json. Semua aktivitas dalam daftar `activityIds` yang muncul sejak `startTime` dikembalikan.


## Examples

### Example #1
Menarik tabel aktivitas "Kunjungan Situs Web" sejak 1 November 2015
```powerquery
Marketo.Activities("https://100-AAA-999.mktorest.com/rest", #date(2015,11,1), {1})
```

Result: 
```powerquery
Tabel dengan aktivitas "Kunjungi Situs Web" sejak 1 November
```



