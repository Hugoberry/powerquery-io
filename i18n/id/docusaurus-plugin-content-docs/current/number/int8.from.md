---
title: Int8.From
---

# Int8.From


Membuat bilangan bulat 8 bit yang ditandatangani dari nilai yang diberikan.


## Syntax

```powerquery
Int8.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Menghasilkan nilai `number` bilangan bulat 8 bit yang ditandai dari `value` tertentu. Jika`value` tertentu adalah `null`, `Int8.From` menghasilkan `null`. Jika `value` tertentu adalah `number` dalam rentang bilangan bulat 8 bit yang ditandai tanpa bagian pecahan, dihasilkan `value`. Jika memiliki bagian pecahan, bilangan akan dibulatkan dengan modus pembulatan yang ditentukan. Modus pembulatan default adalah `RoundingMode.ToEven`. Jika `value` adalah tipe lain, akan terlebih dahulu dikonversi ke `number`menggunakan `Number.FromText`. Lihat `Number.Round` untuk modus pembulatan yang tersedia. `culture` opsional juga dapat disediakan (misalnya, "en-US").


## Examples

### Example #1
Dapatkan nilai `number` bulat 8 bit `"4"`.
```powerquery
Int8.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Dapatkan nilai `number` bulat 8 bit `"4.5"` menggunakan `RoundingMode.AwayFromZero`.
```powerquery
Int8.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
