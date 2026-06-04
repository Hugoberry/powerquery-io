---
title: Logical.ToText
---

# Logical.ToText


A „true” vagy a „false” szöveget adja vissza a megadott logikai értéktől függően.


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Remarks

Létrehoz egy szöveges értéket a logikai `logicalValue` értékből, amely `true` vagy `false` lehet. Ha a(z) `logicalValue` nem logikai érték, a függvény a rendszer hibát jelez.


## Examples

### Example #1
Szöveges érték létrehozása a logikai `true` értékből
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical
