---
title: Currency.From
---

# Currency.From


Mengembalikan nilai mata uang dari nilai yang ditentukan.


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Menghasilkan nilai `currency` dari `value` yang ditentukan. Jika `value` yang ditentukan adalah `null`, `Currency.From` menghasilkan `null`. Jika `value` yang ditentukan adalah `number` dalam rentang mata uang, bagian pecahan dari `value` dibulatkan ke 4 digit desimal dan dihasilkan. Jika `value` adalah tipe lain, akan dikonversi terlebih dahulu ke `number` menggunakan `Number.FromText`. Rentang yang valid untuk mata uang adalah `-922,337,203,685,477,5808` hingga `922,337,203,685,477,5807`. Lihat `Number.Round` untuk mode pembulatan yang tersedia. Defaultnya adalah `RoundingMode.ToEven`. `culture` opsional juga dapat diberikan (misalnya, "en-US")


## Examples

### Example #1
Dapatkan nilai `currency` sebesar `"1.23455"`.
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2
Dapatkan nilai `currency` sebesar `"1.23455"` menggunakan `RoundingMode.Down`.
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting
