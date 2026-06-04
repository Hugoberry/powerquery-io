---
title: Text.Upper
---

# Text.Upper


Nagybetűssé alakítja az összes karaktert.


## Syntax

```powerquery
Text.Upper(
    text as text,
    optional culture as text
) as text
```


## Remarks

A `text` értékben levő összes karakter nagybetűssé alakításával előállított eredményt adja vissza. Egy nem kötelező `culture` is megadható (például „en-US”).


## Examples

### Example #1
Az „aBcD” karakterlánc nagybetűssé alakítása
```powerquery
Text.Upper("aBcD")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
