---
title: Text.At
---

# Text.At


## Description

Zwraca znak znajdujący się na określonej pozycji.


## Syntax

```powerquery
Text.At(
    text as text,
    index as number
) as text
```


## Details

Zwraca znak znajdujący się na pozycji <code>index</code> w wartości tekstowej <code>text</code>. Pierwszy znak w tekście znajduje się na pozycji 0.


## Examples

### Example #1 
Znajdź znak znajdujący się na pozycji 4 w ciągu „Hello, World”.
```powerquery
Text.At("Hello, World", 4)
```

Result: 
```powerquery
"o"
```




## Category
Text.Extraction
