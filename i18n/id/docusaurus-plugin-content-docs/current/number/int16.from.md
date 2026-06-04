---
title: Int16.From
---

# Int16.From


Membuat bilangan bulat 16 bit dari nilai yang diberikan.


## Syntax

```powerquery
Int16.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Menghasilkan nilai `number` bilangan bulat 16 bit dari `value` tertentu. Jika `value` tertentu adalah `null`, `Int16.From` menghasilkan `null`. Jika `value` tertentu adalah `number` dalam rentang bilangan bulat 16 bit tanpa bagian pecahan, dihasilkan `value`. Jika memiliki bagian pecahan, bilangan akan dibulatkan dengan modus pembulatan yang ditentukan. Modus pembulatan default adalah `RoundingMode.ToEven`. Jika `value` tipe lain, akan dikonversi terlebih dahulu ke `number` menggunakan `Number.FromText`. Lihat `Number.Round` untuk mode pembulatan yang tersedia. `culture` opsional juga dapat disediakan (misalnya, "en-US").


## Examples

### Example #1
Dapatkan nilai `number` bilangan bulat 16 bit `"4"`.
```powerquery
Int64.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Dapatkan nilai `number` bilangan bulat 16 bit `"4.5"` menggunakan `RoundingMode.AwayFromZero`.
```powerquery
Int16.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
