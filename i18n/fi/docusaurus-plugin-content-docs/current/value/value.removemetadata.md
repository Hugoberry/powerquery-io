---
title: Value.RemoveMetadata
---

# Value.RemoveMetadata


Poistaa metatiedot syötteestä.


## Syntax

```powerquery
Value.RemoveMetadata(
    value as any,
    optional metaValue as any
) as any
```


## Remarks

Poistaa metatiedot syötteestä.


## Examples

### Example #1
Poista kaikki metatiedot tekstiarvosta.
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
Poista tekstiarvosta vain yksi metatietokenttä.
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
