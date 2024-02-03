---
title: Text.End
---

# Text.End


## Description

Tiek atgrieztas teksta pēdējās rakstzīmes.


## Syntax

```powerquery
Text.End(
    text as text,
    count as number
) as text
```


## Details

Tiek atgriezta <code>text</code> vērtība, kas ir <code>text</code> vērtības <code>text</code> pēdējās <code>count</code> rakstzīmes.


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
