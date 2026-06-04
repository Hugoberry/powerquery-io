---
title: Logical.From
---

# Logical.From


Membuat logika dari nilai tertentu.


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Remarks

Menghasilkan nilai `logical` dari `value` tertentu. Jika `value` tertentu adalah `null`, `Logical.From` menghasilkan `null`. Jika `value` tertentu adalah `logika`, dihasilkan `value`. Nilai tipe berikut dapat dikonversi ke nilai `logical`:

-   `text`: Nilai `logical` dari nilai teks, baik `"true"` maupun `"false"`. Untuk info selengkapnya, lihat `Logical.FromText`.
-   `number`: `false` jika `value` sama dengan `0`, `true` jika sebaliknya.

Jika `value` termasuk dalam tipe lain,kesalahan dihasilkan.


## Examples

### Example #1
Mengkonversi `2` ke nilai `logical`.
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical
