---
title: Decimal.From
---

# Decimal.From


Mencipta Perpuluhan daripada nilai yang ditentukan.


## Syntax

```powerquery
Decimal.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Mengembalikan nilai `nombor` Perpuluhan daripada `value` yang ditentukan. Jika `value` yang ditentukan adalah `nol`, `Decimal.From` mengembalikan `nol`. Jika `value` yang ditentukan ialah `nombor` dalam julat Perpuluhan, `value` dikembalikan, jika tidak, ralat dikembalikan. Jika `value` adalah daripada apa-apa jenis lain, ia terlebih dahulu akan ditukarkan kepada `nombor` menggunakan `Number.FromText`. `culture` pilihan juga mungkin diberikan (sebagai contoh, "en-US").


## Examples

### Example #1
Dapatkan nilai `number` Perpuluhan daripada `"4.5"`.
```powerquery
Decimal.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
