---
title: Text.Repeat
---

# Text.Repeat


## Description

Devuelve un valor de texto compuesto por el texto de entrada repetido un número de veces especificado.


## Syntax

```powerquery
Text.Repeat(
    text as text,
    count as number
) as text
```


## Details

Devuelve un valor de texto compuesto por el texto de entrada <code>text</code> repetido <code>count</code> veces.


## Examples

### Example #1 
Repetir el texto &#34;a&#34; cinco veces.
```powerquery
Text.Repeat("a", 5)
```

Result: 
```powerquery
"aaaaa"
```


### Example #2 
Repetir el texto &#34;holamundo&#34; tres veces.
```powerquery
Text.Repeat("helloworld.", 3)
```

Result: 
```powerquery
"helloworld.helloworld.helloworld."
```




## Category
Text.Transformations
