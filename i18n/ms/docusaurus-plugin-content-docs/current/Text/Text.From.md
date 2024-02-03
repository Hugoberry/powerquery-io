---
title: Text.From
---

# Text.From


## Description

Mencipta nilai teks daripada nilai yang ditentukan.


## Syntax

```powerquery
Text.From(
    value as any,
    optional culture as text
) as text
```


## Details

Mengembalikan perwakilan teks <code>value</code>. <code>value</code> boleh menjadi nilai <code>number</code>, <code>date</code>, <code>time</code>, <code>datetime</code>, <code>datetimezone</code>, <code>logical</code>, <code>duration</code> atau <code>binary</code> .    Jika nilai yang ditentukan ialah nol, <code>Text.From</code> mengembalikan nol. <code>culture</code> pilihan juga mungkin diberikan (contohnya, "en-US").


## Examples

### Example #1 
Cipta nilai teks daripada nombor 3.
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```




## Category
Text.Conversions from and to text
