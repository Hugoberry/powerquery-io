---
title: Text.BeforeDelimiter
---

# Text.BeforeDelimiter


## Description

Text.BeforeDelimiter


## Syntax

```powerquery
Text.BeforeDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Details

Devuelve la porción de <code>text</code> antes del delimitador <code>delimiter</code> especificado.    Un <code>index</code> numérico opcional indica la aparición de <code>delimiter</code> que debe considerarse.    Una lista opcional <code>index</code> indica la aparición de <code>delimiter</code> que debe considerarse, así como si la indexación debe realizarse desde el inicio o el final de la entrada.


## Examples

### Example #1 
Obtenga la porción de &#34;111-222-333&#34; antes del primer guion.
```powerquery
Text.BeforeDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"111"
```


### Example #2 
Obtenga la porción de &#34;111-222-333&#34; antes del segundo guion.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"111-222"
```


### Example #3 
Obtenga la porción de &#34;111-222-333&#34; antes del segundo guion desde el final.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"111"
```




## Category
Text.Transformations
