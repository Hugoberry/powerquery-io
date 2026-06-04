---
title: List.Dates
---

# List.Dates


Menghasilkan daftar nilai tanggal dengan nilai awal, jumlah, dan nilai durasi inkremental tertentu.


## Syntax

```powerquery
List.Dates(
    start as date,
    count as number,
    step as duration
) as list
```


## Remarks

Menghasilkan daftar nilai `date` dengan ukuran `count` yang dimulai pada `start`. Inkremental tertentu, `step`, adalah nilai `duration` yang ditambahkan ke setiap nilai.


## Examples

### Example #1
Membuat daftar 5 nilai yang dimulai dari Malam Tahun Baru (#date(2011, 12, 31)) dengan inkremental 1 hari (#duration(1, 0, 0, 0)).
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
