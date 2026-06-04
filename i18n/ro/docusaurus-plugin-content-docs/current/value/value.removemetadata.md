---
title: Value.RemoveMetadata
---

# Value.RemoveMetadata


Elimină metadatele din valoarea introdusă.


## Syntax

```powerquery
Value.RemoveMetadata(
    value as any,
    optional metaValue as any
) as any
```


## Remarks

Elimină metadatele din valoarea introdusă.


## Examples

### Example #1
Eliminați toate metadatele dintr-o valoare text.
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
Eliminați un singur câmp de metadate dintr-o valoare text.
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
