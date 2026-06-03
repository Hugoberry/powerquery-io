---
title: Text.BetweenDelimiters
---

# Text.BetweenDelimiters


Text.BetweenDelimiters


## Syntax

```powerquery
Text.BetweenDelimiters(
    text as text,
    startDelimiter as text,
    endDelimiter as text,
    optional startIndex as any,
    optional endIndex as any
) as any
```


## Remarks

Devuelve la porción de `text` entre los delimitadores `startDelimiter` y `endDelimiter` especificados. Un `startIndex` numérico opcional indica la aparición de `startDelimiter` que debe considerarse. Una lista opcional `startIndex` indica la aparición de `startDelimiter` que debe considerarse, así como si la indexación debe realizarse desde el inicio o el final de la entrada. Es similar a `endIndex`, excepto que la indexación se realiza en relación con `startIndex`.


## Examples

### Example #1
Obtenga la porción de "111 (222) 333 (444)" entre el primer paréntesis de apertura y el primer paréntesis de cierre que le siga.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")")
```

Result: 
```powerquery
"222"
```


### Example #2
Obtenga la porción de "111 (222) 333 (444)" entre el segundo paréntesis de apertura y el primer paréntesis de cierre que le siga.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", 1, 0)
```

Result: 
```powerquery
"444"
```


### Example #3
Obtenga la porción de "111 (222) 333 (444)" entre el segundo paréntesis de apertura desde el final y el segundo paréntesis de cierre que le siga.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", {1, RelativePosition.FromEnd}, {1, RelativePosition.FromStart})
```

Result: 
```powerquery
"222) 333 (444"
```




## Category
Text.Transformations
