---
title: List.DateTimeZones
---

# List.DateTimeZones


## Description

Menghasilkan daftar nilai datetimezone dengan nilai awal, jumlah, dan nilai durasi inkremental tertentu.


## Syntax

```powerquery
List.DateTimeZones(
    start as datetimezone,
    count as number,
    step as duration
) as list
```


## Details

Menghasilkan daftar nilai <code>datetimezone</code> dengan ukuran <code>count</code> yang dimulai pada <code>start</code>. Inkremental tertentu, <code>step</code>, adalah nilai <code>duration</code> yang ditambahkan ke setiap nilai.


## Examples

### Example #1 
Membuat daftar 10 nilai yang dimulai dari 5 menit sebelum Hari Tahun Baru (#datetimezone(2011, 12, 31, 23, 55, 0, -8, 0)) dengan inkremental 1 menit (#duration(0, 0, 1, 0)).
```powerquery
List.DateTimeZones(#datetimezone(2011, 12, 31, 23, 55, 0, -8, 0), 10, #duration(0, 0, 1, 0))
```

Result: 
```powerquery
{
    #datetimezone(2011, 12, 31, 23, 55, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 56, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 57, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 58, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 59, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 0, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 1, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 2, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 3, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 4, 0, -8, 0)
}
```




## Category
List.Generators
