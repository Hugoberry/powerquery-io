---
title: List.Durations
---

# List.Durations


## Description

Menghasilkan daftar nilai durasi dengan nilai awal, jumlah, dan nilai durasi inkremental tertentu.


## Syntax

```powerquery
List.Durations(
    start as duration,
    count as number,
    step as duration
) as list
```


## Details

Menghasilkan daftar nilai <code>count</code> <code>duration</code> yang dimulai pada <code>start</code> dengan inkremental sebesar <code>duration</code> tertentu, <code>step</code>.


## Examples

### Example #1 
Membuat daftar 5 nilai yang dimulai pada 1 jam dengan inkremental berdasarkan jam.
```powerquery
List.Durations(#duration(0, 1, 0, 0), 5, #duration(0, 1, 0, 0))
```

Result: 
```powerquery
{
    #duration(0, 1, 0, 0),
    #duration(0, 2, 0, 0),
    #duration(0, 3, 0, 0),
    #duration(0, 4, 0, 0),
    #duration(0, 5, 0, 0)
}
```




## Category
List.Generators
