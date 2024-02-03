---
title: List.DateTimes
---

# List.DateTimes


## Description

Menghasilkan daftar nilai datetime dengan nilai awal, jumlah, dan nilai durasi inkremental tertentu.


## Syntax

```powerquery
List.DateTimes(
    start as datetime,
    count as number,
    step as duration
) as list
```


## Details

Menghasilkan daftar nilai <code>datetime</code> dengan ukuran <code>count</code> yang dimulai pada <code>start</code>. Inkremental tertentu, <code>step</code>, adalah nilai <code>duration</code> yang ditambahkan ke setiap nilai.


## Examples

### Example #1 
Membuat daftar 10 nilai yang dimulai dari 5 menit sebelum Hari Tahun Baru (#datetime(2011, 12, 31, 23, 55, 0)) dengan inkremental 1 menit (#duration(0, 0, 1, 0)).
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
