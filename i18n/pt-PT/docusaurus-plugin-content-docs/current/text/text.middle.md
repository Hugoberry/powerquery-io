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

Devolve `count` carateres, ou até ao fim de `text`; no desvio `start`.


## Examples

### Example #1
Localize a subcadeia do texto "Hello World" que começa no índice 6 e tem 5 carateres.
```powerquery
Text.Middle("Hello World", 6, 5)
```

Result: 
```powerquery
"World"
```


### Example #2
Localize a subcadeia do texto "Hello World" que começa no índice 6 e vai até ao fim.
```powerquery
Text.Middle("Hello World", 6, 20)
```

Result: 
```powerquery
"World"
```


### Example #3
Localize a subcadeia do texto "Hello World" com início no índice 0 e extensão de dois carateres.
```powerquery
Text.Middle("Hello World", 0, 2)
```

Result: 
```powerquery
"He"
```




## Category
Text.Extraction
