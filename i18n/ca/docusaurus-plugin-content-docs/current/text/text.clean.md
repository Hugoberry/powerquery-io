---
title: Text.Clean
---

# Text.Clean


Retorna el valor de text amb tots els caràcters de control suprimits.


## Syntax

```powerquery
Text.Clean(
    text as text
) as text
```


## Remarks

Retorna un valor de text amb tots els caràcters de control `text` suprimits.


## Examples

### Example #1
Suprimiu els avanços de línia i altres caràcters de control des d'un valor de text.
```powerquery
Text.Clean("ABC#(lf)D")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
