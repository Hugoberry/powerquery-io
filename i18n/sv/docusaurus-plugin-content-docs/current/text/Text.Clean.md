---
title: Text.Clean
---

# Text.Clean


Returnerar textvärdet med alla kontrolltecken borttagna.


## Syntax

```powerquery
Text.Clean(
    text as text
) as text
```


## Remarks

Returnerar ett textvärde med alla kontrolltecken för <code>text</code> borttagna.


## Examples

### Example #1 
Ta bort radmatningar och andra kontrolltecken från ett textvärde.
```powerquery
Text.Clean("ABC#(lf)D")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
