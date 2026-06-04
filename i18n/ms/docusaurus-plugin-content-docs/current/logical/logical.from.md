---
title: Logical.From
---

# Logical.From


Mencipta logik daripada nilai yang ditentukan.


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Remarks

Mengembalikan nilai `logical` daripada `value` yang ditentukan. Jika `value` yang ditentukan ialah `null`, `Logical.From` mengembalikan `null`. Jika `value` yang diberikan ialah `logical`, `value` dikembalikan. Nilai daripada jenis berikut boleh ditukarkan kepada nilai `logical`:

-   `text`: Nilai `logical` daripada nilai teks, sama ada `"true"` atau `"false"`. Lihat `Logical.FromText` untuk butiran.
-   `number`: `false` jika `value` bersamaan dengan `0`, `true` sebaliknya.

Jika `value` jika sebarang jenis lain, ralat dikembalikan.


## Examples

### Example #1
Menukar `2` kepada nilai `logical`.
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical
