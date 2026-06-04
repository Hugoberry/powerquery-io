---
title: Logical.ToText
---

# Logical.ToText


Menghasilkan teks "benar" atau "salah" dengan nilai logika tertentu.


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Remarks

Membuat nilai teks dari nilai logika `logicalValue`, baik `true` maupun `false`. Jika `logicalValue` bukan nilai logika, kesalahan akan muncul.


## Examples

### Example #1
Membuat nilai teks dari logika `true`.
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical
