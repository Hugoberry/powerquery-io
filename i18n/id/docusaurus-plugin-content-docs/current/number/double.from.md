---
title: Double.From
---

# Double.From


Membuat Ganda dari nilai yang diberikan.


## Syntax

```powerquery
Double.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Mengembalikan nilai `number` Ganda dari `value` tertentu. Jika `value` tertentu adalah `null`, `Double.From` menghasilkan `null`. Jika `value` tertentu adalah `number` dalam rentang Ganda, dihasilkan `value`, jika tidak akan dihasilkan kesalahan. Jika `value` adalah tipe lain, akan terlebih dahulu dikonversi ke `number` menggunakan `Number.FromText`.`culture` opsional juga dapat disediakan (misalnya, "en-US").


## Examples

### Example #1
Dapatkan nilai `number` Ganda `"4"`.
```powerquery
Double.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
