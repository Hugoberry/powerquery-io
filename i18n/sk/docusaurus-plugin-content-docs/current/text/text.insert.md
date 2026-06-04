---
title: Text.Insert
---

# Text.Insert


Vloží jednu textovú hodnotu do inej na danej pozícii.


## Syntax

```powerquery
Text.Insert(
    text as text,
    offset as number,
    newText as text
) as text
```


## Remarks

Vráti výsledok vloženia textovej hodnoty `newText` do textovej hodnoty `text` na pozícii `offset`. Pozície začínajú číslom 0.


## Examples

### Example #1
Vložte znak "C" medzi znaky "B" a "D" v hodnote "ABD".
```powerquery
Text.Insert("ABD", 2, "C")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Modification
