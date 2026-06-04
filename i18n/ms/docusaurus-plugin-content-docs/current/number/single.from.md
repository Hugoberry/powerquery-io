---
title: Single.From
---

# Single.From


Mencipta Tunggal daripada nilai yang diberikan.


## Syntax

```powerquery
Single.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Mengembalikan nilai `nombor` Tunggal daripada `value` yang ditentukan. Jika `value` yang ditentukan adalah `nol`, `Single.From` mengembalikan `nol`. Jika `value` yang ditentukan adalah `nombor` dalam julat Tunggal, `value` dikembalikan, jika tidak, ralat dikembalikan. Jika `value` adalah daripada apa-apa jenis lain, ia terlebih dahulu akan ditukarkan kepada `nombor` menggunakan `Number.FromText`. `culture` pilihan juga mungkin diberikan (sebagai contoh, "en-US").


## Examples

### Example #1
Dapatkan nilai `number` Tunggal daripada `"1.5"`.
```powerquery
Single.From("1.5")
```

Result: 
```powerquery
1.5
```




## Category
Number.Conversion and formatting
