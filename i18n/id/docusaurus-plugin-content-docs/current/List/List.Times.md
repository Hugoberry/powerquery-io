---
title: List.Times
---

# List.Times


## Description

Menghasilkan daftar nilai waktu dengan nilai awal, jumlah, dan nilai durasi inkremental tertentu.


## Syntax

```powerquery
List.Times(
    start as time,
    count as number,
    step as duration
) as list
```


## Details

Menghasilkan daftar nilai <code>time</code> dengan ukuran <code>count</code> yang dimulai pada <code>start</code>. Inkremental tertentu, <code>step</code>, adalah nilai <code>duration</code> yang ditambahkan ke setiap nilai.


## Examples

### Example #1 
Membuat daftar 4 nilai yang dimulai dari siang (#time(12, 0, 0)) dengan inkremental satu jam (#duration(0, 1, 0, 0)).
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
