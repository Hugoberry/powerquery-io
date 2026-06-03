---
title: Value.RemoveMetadata
---

# Value.RemoveMetadata


Rimuove l'input dei metadati.


## Syntax

```powerquery
Value.RemoveMetadata(
    value as any,
    optional metaValue as any
) as any
```


## Remarks

Rimuove l'input dei metadati.


## Examples

### Example #1
Rimuove tutti i metadati da un valore di testo.
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
Rimuove un solo campo di metadati da un valore di testo.
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
