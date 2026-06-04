---
title: Percentage.From
---

# Percentage.From


Mengembalikan nilai peratusan daripada nilai yang ditentukan.


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Mengembalikan nilai `peratusan` daripada `value` yang ditentukan. Jika `value` yang ditentukan adalah `nol`, `Percentage.From` mengembalikan `nol`. Jika `value` yang ditentukan ialah `teks` dengan simbol peratus belakang, maka nombor perpuluhan yang ditukar akan dikembalikan. Jika tidak, nilai akan ditukar kepada `nombor` menggunakan `Number.From`. `culture` pilihan juga mungkin diberikan (sebagai contoh, "en-US").


## Examples

### Example #1
Dapatkan nilai `percentage` sebanyak `"12.3%"`.
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
