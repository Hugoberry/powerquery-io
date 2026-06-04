---
title: Text.Clean
---

# Text.Clean


Tiek atgriezta teksta vērtība, kurā noņemtas visas vadības rakstzīmes.


## Syntax

```powerquery
Text.Clean(
    text as text
) as text
```


## Remarks

Tiek atgriezta teksta vērtība, kurā noņemtas visas `text` vadības rakstzīmes.


## Examples

### Example #1
Noņemiet rindpadeves un citas vadības rakstzīmes no teksta vērtības.
```powerquery
Text.Clean("ABC#(lf)D")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
