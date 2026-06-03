---
title: Value.RemoveMetadata
---

# Value.RemoveMetadata


Tømmer inputtet for metadata.


## Syntax

```powerquery
Value.RemoveMetadata(
    value as any,
    optional metaValue as any
) as any
```


## Remarks

Tømmer inputtet for metadata.


## Examples

### Example #1
Fjern alle metadata fra en tekstværdi.
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
Fjern kun ét felt med metadata fra en tekstværdi.
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
