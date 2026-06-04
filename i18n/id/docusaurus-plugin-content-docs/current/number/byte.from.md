---
title: Byte.From
---

# Byte.From


Membuat bilangan bulat 8 bit dari nilai yang diberikan.


## Syntax

```powerquery
Byte.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Menghasilkan nilai `number` bilangan bulat 8-bit dari `value` yang ditentukan. Jika `value` yang ditentukan adalah `null`, `Byte.From` menghasilkan `null`. Jika `value` yang ditentukan adalah `number` dalam rentang bilangan bulat 8-bit tanpa bagian pecahan, dihasilkan `value`. Jika memiliki bagian pecahan, maka angka dibulatkan dengan mode pembulatan yang ditentukan. Mode pembulatan default adalah `RoundingMode.ToEven`. Jika `value` adalah tipe lain, akan dikonversi terlebih dahulu ke `number` menggunakan `Number.FromText`. Lihat `Number.Round` untuk mode pembulatan yang tersedia. `culture` opsional juga dapat diberikan (misalnya, "en-US").


## Examples

### Example #1
Dapatkan nilai `number` bilangan bulat 8 bit `"4"`.
```powerquery
Byte.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Dapatkan nilai `number` bilangan bulat 8 bit `"4.5"` menggunakan `RoundingMode.AwayFromZero`.
```powerquery
Byte.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
