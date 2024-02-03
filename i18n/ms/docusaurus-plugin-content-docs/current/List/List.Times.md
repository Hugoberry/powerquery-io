---
title: List.Times
---

# List.Times


## Description

Menjana senarai nilai masa jika nilai asal, kiraan dan nilai tempoh tokokan diberikan.


## Syntax

```powerquery
List.Times(
    start as time,
    count as number,
    step as duration
) as list
```


## Details

Mengembalikan senarai nilai <code>time</code> dengan saiz <code>count</code>, bermula pada <code>start</code>. Tokokan yang ditentukan, <code>step</code>, ialah nilai <code>duration</code> yang ditambah pada setiap nilai.


## Examples

### Example #1 
Cipta senarai 4 nilai yang bermula dari tengah hari (#time(12, 0, 0)) menokok dengan satu jam (#duration(0, 1, 0, 0)).
```powerquery
List.Times(#time(12, 0, 0), 4, #duration(0, 1, 0, 0))
```

Result: 
```powerquery
{
    #time(12, 0, 0),
    #time(13, 0, 0),
    #time(14, 0, 0),
    #time(15, 0, 0)
}
```




## Category
List.Generators
