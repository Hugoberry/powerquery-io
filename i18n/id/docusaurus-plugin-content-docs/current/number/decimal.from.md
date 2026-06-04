---
title: Decimal.From
---

# Decimal.From


Membuat Desimal dari nilai yang diberikan.


## Syntax

```powerquery
Decimal.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Menghasilkan nilai `number` Desimal dari `value` tertentu. Jika `value` tertentu adalah `null`, `Decimal.From` menghasilkan `null`. Jika `value` tertentu adalah `number` dalam rentang Desimal, dihasilkan `value`, jika tidak dihasilkan kesalahan. Jika `value` adalah tipe lain, akan terlebih dahulu dikonversi ke `number` menggunakan `Number.FromText`.`culture` opsional juga dapat disediakan (misalnya, "en-US").


## Examples

### Example #1
Dapatkan nilai `number` Desimal `"4.5"`.
```powerquery
Decimal.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
