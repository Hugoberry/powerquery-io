---
title: Text.TrimEnd
---

# Text.TrimEnd


## Description

Elimină toate spaţiile goale de la sfârşit.


## Syntax

```powerquery
Text.TrimEnd(
    text as text,
    optional trim as any
) as text
```


## Details

Returnează rezultatul eliminării tuturor spaţiilor goale de la sfârşit din valoarea text <code>text</code>.


## Examples

### Example #1 
Eliminaţi spaţiile goale de la sfârşit din „     a b c d    ”.
```powerquery
Text.TrimEnd("     a b c d    ")
```

Result: 
```powerquery
"     a b c d"
```




## Category
Text.Transformations
