---
title: Text.At
---

# Text.At


Retorna o caractere na posição especificada.


## Syntax

```powerquery
Text.At(
    text as text,
    index as number
) as text
```


## Remarks

Retorna o caractere no valor de texto `text` na posição `index`. O primeiro caractere do texto está na posição 0.


## Examples

### Example #1
Localize o caractere na posição 4 na cadeia de caracteres "Olá, Mundo".
```powerquery
Text.At("Hello, World", 4)
```

Result: 
```powerquery
"o"
```




## Category
Text.Extraction
