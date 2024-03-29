---
title: Text.Repeat
---

# Text.Repeat


Devolve um valor de texto composto pelo texto de entrada repetido um número de vezes especificado.


## Syntax

```powerquery
Text.Repeat(
    text as text,
    count as number
) as text
```


## Remarks

Devolve um valor de texto composto pelo texto de entrada <code>text</code> repetido <code>count</code> vezes.


## Examples

### Example #1 
Repetir o texto &#34;a&#34; cinco vezes.
```powerquery
Text.Repeat("a", 5)
```

Result: 
```powerquery
"aaaaa"
```


### Example #2 
Repetir o texto &#34;olámundo&#34; três vezes.
```powerquery
Text.Repeat("helloworld.", 3)
```

Result: 
```powerquery
"helloworld.helloworld.helloworld."
```




## Category
Text.Transformations
