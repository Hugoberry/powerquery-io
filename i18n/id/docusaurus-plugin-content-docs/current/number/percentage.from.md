---
title: Percentage.From
---

# Percentage.From


Menghasilkan nilai persentase dari nilai yang diberikan.


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Menghasilkan nilai `percentage` dari yang diberikan `value`. Jika nilai yang diberikan `value` is `null`, `Percentage.From` menghasilkan `null`. Jika nilai yang diberikan `value` adalah `text` dengan simbol persen di belakang, makan angka desimal yang dikonversi akan dihasilkan. Sebaliknya, lihat `Number.From` untuk mengonversinya ke nilai `value`. `culture` opsional juga dapat disediakan (misalnya, "en-US").


## Examples

### Example #1
Dapatkan nilai `persentase` dari `"12,3%"`.
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
