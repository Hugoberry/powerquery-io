---
title: Text.Middle
---

# Text.Middle


## Description

Retorna a subcadeia de caracteres até um comprimento específico.


## Syntax

```powerquery
Text.Middle(
    text as text,
    start as number,
    optional count as number
) as text
```


## Details

Retorna <code>count</code> caracteres, ou até o final de <code>text</code>; no deslocamento <code>start</code>.


## Examples

### Example #1 
Encontre a subcadeia de caracteres no texto &#34;Olá Mundo&#34; iniciando no índice 6 abrangendo 5 caracteres.
```powerquery
Text.Middle("Hello World", 6, 5)
```

Result: 
```powerquery
"World"
```


### Example #2 
Encontre a subcadeia de caracteres no texto &#34;Olá Mundo&#34; iniciando no índice 6 até o final.
```powerquery
Text.Middle("Hello World", 6, 20)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
