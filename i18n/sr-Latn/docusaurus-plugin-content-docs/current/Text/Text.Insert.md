---
title: Text.Insert
---

# Text.Insert


## Description

Umeće jednu tekstualnu vrednost u drugu na datom položaju.


## Syntax

```powerquery
Text.Insert(
    text as text,
    offset as number,
    newText as text
) as text
```


## Details

Vraća rezultat umetanja tekstualne vrednosti <code>newText</code> u tekstualnu vrednost <code>text</code> na položaju <code>offset</code>. Položaji kreću od broja 0.


## Examples

### Example #1 
Umeće „C“ između „B“ i „D“ u „ABD“.
```powerquery
Text.Insert("ABD", 2, "C")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Modification
