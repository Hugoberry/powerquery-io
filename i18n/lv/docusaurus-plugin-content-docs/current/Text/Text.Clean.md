---
title: Text.Clean
---

# Text.Clean


## Description

Tiek atgriezta teksta vērtība, kurā noņemtas visas vadības rakstzīmes.


## Syntax

```powerquery
Text.Clean(
    text as text
) as text
```


## Details

Tiek atgriezta teksta vērtība, kurā noņemtas visas <code>text</code> vadības rakstzīmes.


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
