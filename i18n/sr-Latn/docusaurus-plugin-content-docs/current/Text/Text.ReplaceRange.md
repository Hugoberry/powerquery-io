---
title: Text.ReplaceRange
---

# Text.ReplaceRange


## Description

Uklanja opseg znakova i umeće novu vrednost na navedenom položaju.


## Syntax

```powerquery
Text.ReplaceRange(
    text as text,
    offset as number,
    count as number,
    newText as text
) as text
```


## Details

Vraća rezultat uklanjanja broja znakova, <code>count</code>, iz tekstualne vrednosti <code>text</code> počev od položaja <code>offset</code>, a zatim umeće tekstualnu vrednost <code>newText</code> na istom položaju u <code>text</code>.


## Examples

### Example #1 
Zamena jednog znaka na položaju 2 u tekstualnoj vrednosti „ABGF“ novom tekstualnom vrednošću „CDE“.
```powerquery
Text.ReplaceRange("ABGF", 2, 1, "CDE")
```

Result: 
```powerquery
"ABCDEF"
```




## Category
Text.Modification
