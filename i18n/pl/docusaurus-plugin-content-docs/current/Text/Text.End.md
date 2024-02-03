---
title: Text.End
---

# Text.End


## Description

Zwraca ostatnie znaki tekstu.


## Syntax

```powerquery
Text.End(
    text as text,
    count as number
) as text
```


## Details

Zwraca wartość typu <code>text</code>, która składa się z <code>count</code> ostatnich znaków wartości typu <code>text</code> <code>text</code>.


## Examples

### Example #1 
Pobierz 5 ostatnich znaków z tekstu „Hello, World”.
```powerquery
Text.End("Hello, World", 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
