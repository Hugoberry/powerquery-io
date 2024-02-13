---
title: Text.TrimEnd
---

# Text.TrimEnd


Remove todos os espaços em branco à direita.


## Syntax

```powerquery
Text.TrimEnd(
    text as text,
    optional trim as any
) as text
```


## Remarks

Devolve o resultado da remoção de todos os espaços em branco à direita do valor de texto <code>text</code>.


## Examples

### Example #1 
Remover os espaços em branco à direita de &#34;     a b c d    &#34;.
```powerquery
Text.TrimEnd("     a b c d    ")
```

Result: 
```powerquery
"     a b c d"
```




## Category
Text.Transformations
