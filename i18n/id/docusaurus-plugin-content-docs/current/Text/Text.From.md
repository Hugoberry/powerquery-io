---
title: Text.From
---

# Text.From


## Description

Membuat nilai teks dari nilai tertentu.


## Syntax

```powerquery
Text.From(
    value as any,
    optional culture as text
) as text
```


## Details

Mengembalikan representasi teks <code>value</code>. <code>value</code> dapat berupa nilai <code>number</code>, <code>date</code>, <code>time</code>, <code>datetime</code>, <code>datetimezone</code>, <code>logical</code>, <code>duration</code>, atau <code>binary</code>.    Jika nilai yang diberikan null, <code>Text.From</code> akan menghasilkan null. <code>culture</code> opsional juga dapat diberikan. <code>culture</code> opsional juga dapat disediakan (misalnya, "en-US").


## Examples

### Example #1 
Membuat nilai teks dari angka 3.
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```




## Category
Text.Conversions from and to text
