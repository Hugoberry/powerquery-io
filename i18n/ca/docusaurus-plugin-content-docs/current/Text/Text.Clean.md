---
title: Text.Clean
---

# Text.Clean


## Description

Retorna el valor de text amb tots els caràcters de control suprimits.


## Syntax

```powerquery
Text.Clean(
    text as text
) as text
```


## Details

Retorna un valor de text amb tots els caràcters de control <code>text</code> suprimits.


## Examples

### Example #1 
Suprimiu els avanços de línia i altres caràcters de control des d&#39;un valor de text.
```powerquery
Text.Clean("ABC#(lf)D")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
