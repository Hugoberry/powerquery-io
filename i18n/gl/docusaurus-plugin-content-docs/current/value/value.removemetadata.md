---
title: Value.RemoveMetadata
---

# Value.RemoveMetadata


Descobre a entrada de metadatos.


## Syntax

```powerquery
Value.RemoveMetadata(
    value as any,
    optional metaValue as any
) as any
```


## Remarks

Descobre a entrada de metadatos.


## Examples

### Example #1
Eliminar todos os metadatos dun valor de texto.
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
Eliminar só un campo de metadatos dun valor de texto.
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
