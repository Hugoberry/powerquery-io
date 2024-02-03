---
title: Text.Start
---

# Text.Start


## Description

Devolve o inicio do texto.


## Syntax

```powerquery
Text.Start(
    text as text,
    count as number
) as text
```


## Details

Devolve os <code>count</code> primeiros caracteres de <code>text</code> como un valor de texto.


## Examples

### Example #1 
Obter os 5 primeiros caracteres de &#34;Ola, mundo&#34;.
```powerquery
Text.Start("Hello, World", 5)
```

Result: 
```powerquery
"Hello"
```




## Category
Text.Extraction
