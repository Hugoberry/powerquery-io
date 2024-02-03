---
title: Text.TrimStart
---

# Text.TrimStart


## Description

Elimină toate spaţiile goale de la început.


## Syntax

```powerquery
Text.TrimStart(
    text as text,
    optional trim as any
) as text
```


## Details

Returnează rezultatul eliminării tuturor spaţiilor goale de la început din valoarea text <code>text</code>.


## Examples

### Example #1 
Eliminaţi spaţiile goale de la început din „     a b c d    ”.
```powerquery
Text.TrimStart("   a b c d    ")
```

Result: 
```powerquery
"a b c d    "
```




## Category
Text.Transformations
