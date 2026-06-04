---
title: Double.From
---

# Double.From


Mencipta Berganda daripada nilai yang ditentukan.


## Syntax

```powerquery
Double.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Mengembalikan nilai `bilangan` Berganda daripada `value` yang ditentukan. Jika `value` yang ditentukan adalah `nol`, `Double.From` mengembalikan `nol`. Jika `value` yang ditentukan ialah `bilangan` dalam julat Berganda, `value` dikembalikan, jika tidak, ralat dikembalikan. Jika `value` adalah daripada apa-apa jenis lain, ia terlebih dahulu akan ditukarkan kepada `nombor` menggunakan `Number.FromText`. `culture` pilihan juga mungkin diberikan (sebagai contoh, "en-US").


## Examples

### Example #1
Dapatkan nilai `nombor` Berganda daripada `"4"`.
```powerquery
Double.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
