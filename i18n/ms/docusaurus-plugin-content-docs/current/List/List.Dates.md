---
title: List.Dates
---

# List.Dates


## Description

Menjana senarai nilai tarikh jika nilai asal, kiraan dan nilai tempoh tokokan diberikan.


## Syntax

```powerquery
List.Dates(
    start as date,
    count as number,
    step as duration
) as list
```


## Details

Mengembalikan senarai nilai <code>date</code> dengan saiz <code>count</code>, bermula pada <code>start</code>. Tokokan yang ditentukan, <code>step</code>, ialah nilai <code>duration</code> yang ditambah pada setiap nilai.


## Examples

### Example #1 
Cipta senarai 5 nilai yang bermula dari Malam Hari Tahun Baru (#date(2011, 12, 31)) menokok sebanyak 1 hari(#duration(1, 0, 0, 0)).
```powerquery
List.Dates(#date(2011, 12, 31), 5, #duration(1, 0, 0, 0))
```

Result: 
```powerquery
{
    #date(2011, 12, 31),
    #date(2012, 1, 1),
    #date(2012, 1, 2),
    #date(2012, 1, 3),
    #date(2012, 1, 4)
}
```




## Category
List.Generators
