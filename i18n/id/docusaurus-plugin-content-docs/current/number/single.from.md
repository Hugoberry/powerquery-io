---
title: Single.From
---

# Single.From


Membuat Tunggal dari nilai yang diberikan.


## Syntax

```powerquery
Single.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Menghasilkan nilai `number` Tunggal dari `value` tertentu. Jika `value` tertentu adalah `null`, `Single.From` menghasilkan `null`. Jika `value` tertentu adalah `number` dalam rentang Tunggal, dihasilkan `value`, jika tidak akan dihasilkan kesalahan. Jika `value` adalah tipe lain, akan terlebih dahulu dikonversi ke `number` menggunakan `Number.FromText`.`culture` opsional juga dapat disediakan (misalnya, "en-US").


## Examples

### Example #1
Dapatkan nilai `number` Tunggal `"1.5"`.
```powerquery
Single.From("1.5")
```

Result: 
```powerquery
1.5
```




## Category
Number.Conversion and formatting
