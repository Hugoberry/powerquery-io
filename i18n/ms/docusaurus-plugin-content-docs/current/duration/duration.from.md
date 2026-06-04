---
title: Duration.From
---

# Duration.From


Mencipta tempoh daripada nilai yang ditentukan.


## Syntax

```powerquery
Duration.From(
    value as any
) as duration
```


## Remarks

Mengembalikan nilai tempoh daripada nilai yang diberikan.

-   `value`: Nilai daripada mana tempoh diterbitkan. Jika `value` yang diberikan ialah `nol`, fungsi ini mengembalikan `nol`. Jika `value` yang diberikan ialah `tempoh`, `value` dikembalikan. Nilai jenis berikut boleh ditukar kepada nilai `tempoh`:
    -   `teks`: Nilai `tempoh` daripada bentuk masa berlalu teks (d.h:m:s). Rujuk `Duration.FromText` untuk butiran.
    -   `nombor`: `Tempoh` yang bersamaan dengan bilangan hari sepenuhnya dan sebahagian yang diungkapkan oleh `value`.

Jika `value` ialah daripada apa-apa jenis lain, ralat dikembalikan.


## Examples

### Example #1
Menukar `2.525` kepada nilai `duration`.
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```


### Example #2
Menukar nilai teks `"2.05:55:20.34567"` kepada nilai `tempoh`.
```powerquery
Duration.From("2.05:55:20.34567")
```

Result: 
```powerquery
#duration(2, 5, 55, 20.3456700)
```




## Category
Duration
