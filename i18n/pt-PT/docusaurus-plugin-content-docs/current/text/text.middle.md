---
title: Text.Middle
---

# Text.Middle


Devolve a subcadeia até um comprimento específico.


## Syntax

```powerquery
Text.Middle(
    text as text,
    start as number,
    optional count as number
) as text
```


## Remarks

Devolve <code>count</code> carateres, ou até ao fim de <code>text</code>; no desvio <code>start</code>.


## Examples

### Example #1 
Localize a subcadeia do texto &#34;Hello World&#34; que começa no índice 6 e tem 5 carateres.
```powerquery
Text.Middle("Hello World", 6, 5)
```

Result: 
```powerquery
"World"
```


### Example #2 
Localize a subcadeia do texto &#34;Hello World&#34; que começa no índice 6 e vai até ao fim.
```powerquery
Text.Middle("Hello World", 6, 20)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
