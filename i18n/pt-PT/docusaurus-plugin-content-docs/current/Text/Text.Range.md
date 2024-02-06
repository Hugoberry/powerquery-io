---
title: Text.Range
---

# Text.Range


Devolve a subcadeia encontrada no desvio.


## Syntax

```powerquery
Text.Range(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Remarks

Devolve a subcadeia do texto <code>text</code> encontrada no desvio <code>offset</code>.    É possível incluir um parâmetro opcional, <code>count</code>, para especificar o número de carateres a devolver. Gera um erro se não existirem carateres suficientes.


## Examples

### Example #1 
Determinar a subcadeia do texto &#34;Olá Mundo&#34; que começa no índice 6.
```powerquery
Text.Range("Hello World", 6)
```

Result: 
```powerquery
"World"
```


### Example #2 
Determinar a subcadeia do texto &#34;Olá Mundo Olá&#34; que começa no índice 6 e abrange 5 carateres.
```powerquery
Text.Range("Hello World Hello", 6, 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
