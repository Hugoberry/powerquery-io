---
title: Text.TrimStart
---

# Text.TrimStart


## Description

Remove todos os espaços em branco à esquerda.


## Syntax

```powerquery
Text.TrimStart(
    text as text,
    optional trim as any
) as text
```


## Details

Devolve o resultado da remoção de todos os espaços em branco à esquerda do valor de texto <code>text</code>.


## Examples

### Example #1 
Remover os espaços em branco à esquerda de &#34;     a b c d    &#34;.
```powerquery
Text.TrimStart("   a b c d    ")
```

Result: 
```powerquery
"a b c d    "
```




## Category
Text.Transformations
