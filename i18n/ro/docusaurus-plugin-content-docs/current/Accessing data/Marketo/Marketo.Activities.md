---
title: Marketo.Activities
---

# Marketo.Activities


## Description

Returnează un tabel cu activitățile clientului potențial.


## Syntax

```powerquery
Marketo.Activities(
    url as text,
    startTime as date,
    activityIds as list
) as table
```


## Details

Creează un apel către punctul final API Marketo REST de la <code>url</code>/rest/v1/activities.json. Sunt returnate toate activitățile din lista <code>IDuriActivitate</code> care au avut loc după <code>oraÎnceput</code>.


## Examples

### Example #1 
Extrage un tabel cu activitățile de vizitare a paginilor web începând cu 1 noiembrie 2015
```powerquery
Marketo.Activities("https://100-AAA-999.mktorest.com/rest", #date(2015,11,1), {1})
```

Result: 
```powerquery
Un tabel cu detaliile tuturor activităților de vizitare a paginilor web începând cu 1 noiembrie
```



