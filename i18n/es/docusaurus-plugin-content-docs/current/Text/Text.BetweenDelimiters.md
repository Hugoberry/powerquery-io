---
title: Text.BetweenDelimiters
---

# Text.BetweenDelimiters


## Description

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


## Details

Devuelve la porción de <code>text</code> entre los delimitadores <code>startDelimiter</code> y <code>endDelimiter</code> especificados.    Un <code>startIndex</code> numérico opcional indica la aparición de <code>startDelimiter</code> que debe considerarse.    Una lista opcional <code>startIndex</code> indica la aparición de <code>startDelimiter</code> que debe considerarse, así como si la indexación debe realizarse desde el inicio o el final de la entrada.    Es similar a <code>endIndex</code>, excepto que la indexación se realiza en relación con <code>startIndex</code>.


## Examples

### Example #1 
Obtenga la porción de &#34;111 (222) 333 (444)&#34; entre el primer paréntesis de apertura y el primer paréntesis de cierre que le siga.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")")
```

Result: 
```powerquery
"222"
```


### Example #2 
Obtenga la porción de &#34;111 (222) 333 (444)&#34; entre el segundo paréntesis de apertura y el primer paréntesis de cierre que le siga.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", 1, 0)
```

Result: 
```powerquery
"444"
```


### Example #3 
Obtenga la porción de &#34;111 (222) 333 (444)&#34; entre el segundo paréntesis de apertura desde el final y el segundo paréntesis de cierre que le siga.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", {1, RelativePosition.FromEnd}, {1, RelativePosition.FromStart})
```

Result: 
```powerquery
"222) 333 (444"
```




## Category
Text.Transformations
