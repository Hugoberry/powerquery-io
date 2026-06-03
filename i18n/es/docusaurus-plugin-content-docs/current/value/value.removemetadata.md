---
title: Value.RemoveMetadata
---

# Value.RemoveMetadata


Elimina la entrada de metadatos.


## Syntax

```powerquery
Value.RemoveMetadata(
    value as any,
    optional metaValue as any
) as any
```


## Remarks

Elimina la entrada de metadatos.


## Examples

### Example #1
Quite todos los metadatos de un valor de texto.
```powerquery
Value.Metadata(
    Value.RemoveMetadata("abc" meta [a = 1, b = 2])
)
```

Result: 
```powerquery
[]
```


### Example #2
Quite solo un campo de metadatos de un valor de texto.
```powerquery
Value.Metadata(
    Value.RemoveMetadata("abc" meta [a = 1, b = 2], {"a"})
)
```

Result: 
```powerquery
[b = 2]
```




## Category
Metadata
