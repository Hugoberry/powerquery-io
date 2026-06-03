---
title: Text.End
---

# Text.End


Zwraca ostatnie znaki tekstu.


## Syntax

```powerquery
Text.End(
    text as text,
    count as number
) as text
```


## Remarks

Zwraca wartość typu `text`, która składa się z `count` ostatnich znaków wartości typu `text` `text`.


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
