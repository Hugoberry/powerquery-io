---
title: Text.Clean
---

# Text.Clean


## Description

Vrátí textovou hodnotu s odebranými řídicími znaky.


## Syntax

```powerquery
Text.Clean(
    text as text
) as text
```


## Details

Vrátí textovou hodnotu s odebranými řídicími znaky (<code>text</code>).


## Examples

### Example #1 
Odebere z textové hodnoty odřádkování a další řídicí znaky.
```powerquery
Text.Clean("ABC#(lf)D")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
