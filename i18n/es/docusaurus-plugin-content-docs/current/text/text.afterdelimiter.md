---
title: Text.AfterDelimiter
---

# Text.AfterDelimiter


Text.AfterDelimiter


## Syntax

```powerquery
Text.AfterDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Remarks

Devuelve la porción de `text` después del delimitador `delimiter` especificado. Un `index` numérico opcional indica la aparición de `delimiter` que debe considerarse. Una lista opcional `index` indica la aparición de `delimiter` que debe considerarse, así como si la indexación debe realizarse desde el inicio o el final de la entrada.


## Examples

### Example #1
Obtenga la porción de "111-222-333" después del primer guion.
```powerquery
Text.AfterDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"222-333"
```


### Example #2
Obtenga la porción de "111-222-333" después del segundo guion.
```powerquery
Text.AfterDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"333"
```


### Example #3
Obtenga la porción de "111-222-333" después del segundo guion desde el final.
```powerquery
Text.AfterDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"222-333"
```




## Category
Text.Transformations
