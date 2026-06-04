---
title: Text.Insert
---

# Text.Insert


Inserează o valoare text în alta la o poziţie dată.


## Syntax

```powerquery
Text.Insert(
    text as text,
    offset as number,
    newText as text
) as text
```


## Remarks

Returnează rezultatul inserării valorii text `newText` în valoarea text `text` la poziţia `offset`. Poziţiile încep la numărul 0.


## Examples

### Example #1
Inseraţi „C” între „B” şi „D” în „ABD”.
```powerquery
Text.Insert("ABD", 2, "C")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Modification
