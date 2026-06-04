---
title: Logical.ToText
---

# Logical.ToText


Mengembalikan teks "true" atau "false" jika nilai logik ditentukan.


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Remarks

Mencipta nilai teks daripada nilai logik `logicalValue`, sama ada `true` atau `false`. Jika `logicalValue` bukan nilai logik, ralat akan dipaparkan.


## Examples

### Example #1
Cipta nilai teks daripada logik `true`.
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical
