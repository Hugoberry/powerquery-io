---
title: Text.AfterDelimiter
---

# Text.AfterDelimiter


## Description

Text.AfterDelimiter


## Syntax

```powerquery
Text.AfterDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Details

Devuelve la porción de <code>text</code> después del delimitador <code>delimiter</code> especificado.    Un <code>index</code> numérico opcional indica la aparición de <code>delimiter</code> que debe considerarse.    Una lista opcional <code>index</code> indica la aparición de <code>delimiter</code> que debe considerarse, así como si la indexación debe realizarse desde el inicio o el final de la entrada.


## Examples

### Example #1 
Obtenga la porción de &#34;111-222-333&#34; después del primer guion.
```powerquery
Text.AfterDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"222-333"
```


### Example #2 
Obtenga la porción de &#34;111-222-333&#34; después del segundo guion.
```powerquery
Text.AfterDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"333"
```


### Example #3 
Obtenga la porción de &#34;111-222-333&#34; después del segundo guion desde el final.
```powerquery
Text.AfterDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"222-333"
```




## Category
Text.Transformations
