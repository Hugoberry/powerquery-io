---
title: Text.End
---

# Text.End


Tiek atgrieztas teksta pēdējās rakstzīmes.


## Syntax

```powerquery
Text.End(
    text as text,
    count as number
) as text
```


## Remarks

Tiek atgriezta `text` vērtība, kas ir `text` vērtības `text` pēdējās `count` rakstzīmes.


## Examples

### Example #1
Iegūstiet teksta Hello, World pēdējās 5 rakstzīmes.
```powerquery
Text.End("Hello, World", 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
