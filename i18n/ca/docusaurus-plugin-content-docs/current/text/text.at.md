---
title: Text.At
---

# Text.At


Retorna el caràcter a la posició especificada.


## Syntax

```powerquery
Text.At(
    text as text,
    index as number
) as text
```


## Remarks

Retorna el caràcter del valor de text, `text`, a la posició `index`. El primer caràcter del text és a la posició 0.


## Examples

### Example #1
Troba el caràcter de la posició 4 a la cadena "Hello, World".
```powerquery
Text.At("Hello, World", 4)
```

Result: 
```powerquery
"o"
```




## Category
Text.Extraction
