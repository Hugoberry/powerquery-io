---
title: Marketo.Activities
---

# Marketo.Activities


Mengembalikan jadual dengan aktiviti berita utama.


## Syntax

```powerquery
Marketo.Activities(
    url as text,
    startTime as date,
    activityIds as list
) as table
```


## Remarks

Buat panggilan kepada titik akhir Marketo REST API di `url`/rest/v1/activities.json. Semua aktiviti dalam senarai `activityIds` yang telah berlaku sejak `startTime` telah dikembalikan.


## Examples

### Example #1
Menarikkan jadual aktiviti "Lawati Halaman Web" sejak 1 November 2015
```powerquery
Marketo.Activities("https://100-AAA-999.mktorest.com/rest", #date(2015,11,1), {1})
```

Result: 
```powerquery
Jadual dengan semua aktiviti "Lawati Halaman Web" sejak 1 November
```



