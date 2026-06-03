---
title: Text.End
---

# Text.End


Returnerar de sista tecknen i texten.


## Syntax

```powerquery
Text.End(
    text as text,
    count as number
) as text
```


## Remarks

Returnerar ett `text`\-värde som är de sista `count` tecknen i `text`\-värdet `text`.


## Examples

### Example #1
Hämta de sista 5 tecknen i texten "Hello, World".
```powerquery
Text.End("Hello, World", 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
