---
title: List.DateTimes
---

# List.DateTimes


## Description

Menjana senarai nilai datetime jika nilai asal, kiraan dan nilai tempoh tokokan diberikan.


## Syntax

```powerquery
List.DateTimes(
    start as datetime,
    count as number,
    step as duration
) as list
```


## Details

Mengembalikan senarai nilai <code>datetime</code> dengan saiz <code>count</code>, bermula pada <code>start</code>. Tokokan yang ditentukan, <code>step</code>, ialah nilai <code>duration</code> yang ditambah pada setiap nilai.


## Examples

### Example #1 
Cipta senarai 10 nilai bermula dari 5 minit sebelum Hari Tahun Baru (#datetime(2011, 12, 31, 23, 55, 0)) menokok sebanyak 1 minit (#duration(0, 0, 1, 0)).
```powerquery
List.DateTimes(#datetime(2011, 12, 31, 23, 55, 0), 10, #duration(0, 0, 1, 0))
```

Result: 
```powerquery
{
    #datetime(2011, 12, 31, 23, 55, 0),
    #datetime(2011, 12, 31, 23, 56, 0),
    #datetime(2011, 12, 31, 23, 57, 0),
    #datetime(2011, 12, 31, 23, 58, 0),
    #datetime(2011, 12, 31, 23, 59, 0),
    #datetime(2012, 1, 1, 0, 0, 0),
    #datetime(2012, 1, 1, 0, 1, 0),
    #datetime(2012, 1, 1, 0, 2, 0),
    #datetime(2012, 1, 1, 0, 3, 0),
    #datetime(2012, 1, 1, 0, 4, 0)
}
```




## Category
List.Generators
