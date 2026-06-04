---
title: Text.End
---

# Text.End


Devolve o último carácter do texto.


## Syntax

```powerquery
Text.End(
    text as text,
    count as number
) as text
```


## Remarks

Devolve un valor `text` que é o último carácter `count` do valor `text` `text`.


## Examples

### Example #1
Obter os últimos cinco caracteres do texto "Ola, mundo".
```powerquery
Text.End("Hello, World", 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
