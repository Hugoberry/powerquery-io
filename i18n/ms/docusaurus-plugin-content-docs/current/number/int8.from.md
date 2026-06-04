---
title: Int8.From
---

# Int8.From


Mencipta integer 8 bit bertanda daripada nilai yang ditentukan.


## Syntax

```powerquery
Int8.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Mengembalikan nilai `nombor` integer 8-bit yang bertandatangan daripada `value` yang ditentukan. Jika `value` yang ditentukan adalah `nol`, `Int8.From` mengembalikan `nol`. Jika `value` yang ditentukan ialah `nombor` dalam julat integer 8-bit yang bertandatangan tanpa bahagian pecahan, `value` dikembalikan. Jika ia mempunyai bahagian pecahan, maka nombor tersebut dibundarkan dengan mod pembundaran yang ditentukan. Mod pembundaran lalai ialah `RoundingMode.ToEven`. Jika `value` daripada apa-apa jenis yang lain, ia terlebih dahulu akan ditukarkankan kepada `nombor` menggunakan `Number.FromText`. Rujuk `Number.Round` untuk mod pembundaran yang tersedia. `culture` pilihan juga mungkin diberikan (sebagai contoh, "en-US").


## Examples

### Example #1
Dapatkan nilai `number` integer 8 bit bertanda daripada `"4"`.
```powerquery
Int8.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Dapatkan nilai `number` integer 8 bit bertanda daripada `"4.5"` menggunakan `RoundingMode.AwayFromZero`.
```powerquery
Int8.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
