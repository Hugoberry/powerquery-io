---
title: Text.Range
---

# Text.Range


## Description

Devolve a subcadea localizada no desprazamento.


## Syntax

```powerquery
Text.Range(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Details

Devolve a subcadea do texto <code>text</code> localizada no desprazamento <code>offset</code>.    O parámetro opcional <code>count</code> pódese incluír para especificar o número de caracteres que se van devolver. Xera un erro se non hai caracteres suficientes.


## Examples

### Example #1 
Buscar a subcadea do texto &#34;Ola, Mundo&#34; comezando no índice 6.
```powerquery
Text.Range("Hello World", 6)
```

Result: 
```powerquery
"World"
```


### Example #2 
Buscar a subcadea do texto &#34;Ola, Mundo, Ola&#34; comezando no índice 6 expandindo 5 caracteres.
```powerquery
Text.Range("Hello World Hello", 6, 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
