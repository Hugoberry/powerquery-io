---
title: Text.Middle
---

# Text.Middle


Retorna la subcadena a una longitud específica.


## Syntax

```powerquery
Text.Middle(
    text as text,
    start as number,
    optional count as number
) as text
```


## Remarks

Retorna `count` caràcters, o fins al final de `text`; amb el desplaçament `start`.


## Examples

### Example #1
Cerca la subcadena del text "Hello World" començant per l'índex 6 amb un abast de 5 caràcters.
```powerquery
Text.Middle("Hello World", 6, 5)
```

Result: 
```powerquery
"World"
```


### Example #2
Cerca la subcadena del text "Hello World" començant per l'índex 6 fins al final.
```powerquery
Text.Middle("Hello World", 6, 20)
```

Result: 
```powerquery
"World"
```


### Example #3
Cerca la subcadena del text "Hola, món" començant per l'índex 0 amb un abast de 2 caràcters.
```powerquery
Text.Middle("Hello World", 0, 2)
```

Result: 
```powerquery
"He"
```




## Category
Text.Extraction
