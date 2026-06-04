---
title: Text.ReplaceRange
---

# Text.ReplaceRange


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


## Remarks

Vraća rezultat uklanjanja broja znakova, `count`, iz tekstualne vrednosti `text` počev od položaja `offset`, a zatim umeće tekstualnu vrednost `newText` na istom položaju u `text`.


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
