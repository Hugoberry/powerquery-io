---
title: Text.At
---

# Text.At


Restituisce il carattere nella posizione specificata.


## Syntax

```powerquery
Text.At(
    text as text,
    index as number
) as text
```


## Remarks

Restituisce il carattere nel valore di testo `text` nella posizione `index`. Il primo carattere nel testo è nella posizione 0.


## Examples

### Example #1
Trovare il carattere nella posizione 4 nella stringa "Hello, World".
```powerquery
Text.At("Hello, World", 4)
```

Result: 
```powerquery
"o"
```




## Category
Text.Extraction
