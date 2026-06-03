---
title: Text.BeforeDelimiter
---

# Text.BeforeDelimiter


Text.BeforeDelimiter


## Syntax

```powerquery
Text.BeforeDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Remarks

Devuelve la porción de `text` antes del delimitador `delimiter` especificado. Un `index` numérico opcional indica la aparición de `delimiter` que debe considerarse. Una lista opcional `index` indica la aparición de `delimiter` que debe considerarse, así como si la indexación debe realizarse desde el inicio o el final de la entrada.


## Examples

### Example #1
Obtenga la porción de "111-222-333" antes del primer guion.
```powerquery
Text.BeforeDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"111"
```


### Example #2
Obtenga la porción de "111-222-333" antes del segundo guion.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"111-222"
```


### Example #3
Obtenga la porción de "111-222-333" antes del segundo guion desde el final.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"111"
```




## Category
Text.Transformations
