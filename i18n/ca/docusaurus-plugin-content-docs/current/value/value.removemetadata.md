---
title: Value.RemoveMetadata
---

# Value.RemoveMetadata


Desprèn l'entrada de les metadades.


## Syntax

```powerquery
Value.RemoveMetadata(
    value as any,
    optional metaValue as any
) as any
```


## Remarks

Desprèn l'entrada de les metadades.


## Examples

### Example #1
Suprimeix totes les metadades d'un valor de text.
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
Suprimeix només un camp de metadades d'un valor de text.
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
