---
title: List.Average
---

# List.Average


## Description

Mengembalikan purata nilai. Berfungsi dengan nilai nombor, tarikh, datetime, datetimezone dan tempoh.


## Syntax

```powerquery
List.Average(
    list as list,
    optional precision as Precision.Type
) as any
```


## Details

Mengembalikan nilai purata untuk item dalam senarai, <code>list</code>. Hasil diberi dalam jenis data yang sama sebagai nilai dalam senarai. Hanya berfungsi dengan nilai nombor, tarikh, masa, datetime, datetimezone dan tempoh.    Jika senarai kosong, nol dikembalikan.


## Examples

### Example #1 
Cari purata daripada senarai nombor, &lt;code&gt;\{3, 4, 6}&lt;/code&gt;.
```powerquery
List.Average({3, 4, 6})
```

Result: 
```powerquery
4.333333333333333
```


### Example #2 
Cari purata nilai tarikh 1 Januari 2011, 2 Januari 2011 dan 3 Januari 2011.
```powerquery
List.Average({#date(2011, 1, 1), #date(2011, 1, 2), #date(2011, 1, 3)})
```

Result: 
```powerquery
#date(2011, 1, 2)
```




## Category
List.Averages
