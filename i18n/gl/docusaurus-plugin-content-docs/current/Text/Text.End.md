---
title: Text.End
---

# Text.End


## Description

Devolve o último carácter do texto.


## Syntax

```powerquery
Text.End(
    text as text,
    count as number
) as text
```


## Details

Devolve un valor <code>text</code> que é o último carácter <code>count</code> do valor <code>text</code> <code>text</code>.


## Examples

### Example #1 
Obter os últimos cinco caracteres do texto &#34;Ola, mundo&#34;.
```powerquery
Text.End("Hello, World", 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
