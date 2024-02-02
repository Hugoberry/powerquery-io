---
title: Text.Clean
---

# Text.Clean


## Description

Returns the text value with all control characters removed.


## Syntax

```powerquery
Text.Clean(
    text as text
) as text
```


## Details

Returns a text value with all control characters of <code>text</code> removed.


## Examples

### Example #1 
Remove line feeds and other control characters from a text value.
```powerquery
Text.Clean("ABC#(lf)D")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
