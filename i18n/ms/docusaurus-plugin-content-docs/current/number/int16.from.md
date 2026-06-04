---
title: Int16.From
---

# Int16.From


Mencipta integer 16 bit integer daripada nilai yang ditentukan.


## Syntax

```powerquery
Int16.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Mengembalikan nilai `nombor` integer 16-bit daripada `value` yang ditentukan. Jika `value` yang ditentukan adalah `nol`, `Int16.From` mengembalikan `nol`. Jika `value` yang ditentukan ialah `nombor` dalam julat integer 16-bit tanpa bahagian pecahan, `value` jika dikembalikan. Jika ia mempunyai bahagian pecahan, maka nombor dibundarkan dengan mod pembundaran yang ditentukan. Mod pembundaran lalai ialah `RoundingMode.ToEven`. Jika `value` adalah daripada apa-apa jenis lain, ia terlebih dahulu akan ditukarkan kepada `nombor` menggunakan `Number.FromText`. Rujuk `Number.Round` untuk mod pembundaran yang tersedia. `culture` pilihan juga mungkin diberikan (untuk contoh, "en-US").


## Examples

### Example #1
Dapatkan nilai `nombor` integer 16 bit daripada `"4"`.
```powerquery
Int64.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Dapatkan nilai `number` integer 16 bit daripada `"4.5"` menggunakan `RoundingMode.AwayFromZero`.
```powerquery
Int16.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
