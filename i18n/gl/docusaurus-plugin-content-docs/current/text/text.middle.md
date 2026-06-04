---
title: Text.Middle
---

# Text.Middle


Devolve a subcadea ata unha lonxitude específica.


## Syntax

```powerquery
Text.Middle(
    text as text,
    start as number,
    optional count as number
) as text
```


## Remarks

Devolve `count` caracteres ou ata o final de `text`; no desprazamento `start`.


## Examples

### Example #1
Busque a subcadea no texto "Hello World" comezando polo índice 6 abarcando 5 caracteres.
```powerquery
Text.Middle("Hello World", 6, 5)
```

Result: 
```powerquery
"World"
```


### Example #2
Busque a subcadea no texto "Hello World" comezando polo índice 6 ata o final.
```powerquery
Text.Middle("Hello World", 6, 20)
```

Result: 
```powerquery
"World"
```


### Example #3
Atopa a subcadea do texto "Ola Mundo" que comeza no índice 0 e que abrangue 2 caracteres.
```powerquery
Text.Middle("Hello World", 0, 2)
```

Result: 
```powerquery
"He"
```




## Category
Text.Extraction
