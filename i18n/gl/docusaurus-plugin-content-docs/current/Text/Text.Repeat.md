---
title: Text.Repeat
---

# Text.Repeat


## Description

Devolve un valor de texto composto polo texto de entrada repetido un número de veces especificado.


## Syntax

```powerquery
Text.Repeat(
    text as text,
    count as number
) as text
```


## Details

Devolve un valor de texto composto polo texto de entrada <code>text</code> repetido <code>count</code> veces.


## Examples

### Example #1 
Repetir o texto &#34;a&#34; cinco veces.
```powerquery
Text.Repeat("a", 5)
```

Result: 
```powerquery
"aaaaa"
```


### Example #2 
Repetir o texto &#34;olamundo&#34; tres veces.
```powerquery
Text.Repeat("helloworld.", 3)
```

Result: 
```powerquery
"helloworld.helloworld.helloworld."
```




## Category
Text.Transformations
