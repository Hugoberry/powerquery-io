---
title: Int32.From
---

# Int32.From


Membuat bilangan bulat 32 bit dari nilai yang diberikan.


## Syntax

```powerquery
Int32.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Menghasilkan nilai `number` bilangan bulat 32 bit dari `value` tertentu. Jika `value` tertentu adalah `null`, `Int32.From` menghasilkan `null`. Jika `value` tertentu adalah `number` dalam rentang bilangan bulan 32 bit tanpa bagian pecahan, dihasilkan `value`. Jika memiliki bagian pecahan, bilangan akan dibulatkan dengan mode pembulatan yang ditentukan. Mode pembulatan default adalah `RoundingMode.ToEven`. Jika `value` adalah tipe lain, akan dikonversi terlebih dahulu ke `number` menggunakan `Number.FromText`. Lihat `Number.Round` untuk mode pembulatan yang tersedia. `culture` opsional juga dapat disediakan (misalnya, "en-US").


## Examples

### Example #1
Dapatkan nilai `number` bilangan bulat 32 bit `"4"`.
```powerquery
Int32.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Dapatkan nilai `number` bilangan bulat 32 bit `"4.5"` menggunakan `RoundingMode.AwayFromZero`.
```powerquery
Int32.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
