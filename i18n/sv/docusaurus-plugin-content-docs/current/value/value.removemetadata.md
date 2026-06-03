---
title: Value.RemoveMetadata
---

# Value.RemoveMetadata


Tar bort metadata i angivna indata.


## Syntax

```powerquery
Value.RemoveMetadata(
    value as any,
    optional metaValue as any
) as any
```


## Remarks

Tar bort metadata i angivna indata.


## Examples

### Example #1
Ta bort alla metadata från ett textvärde.
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
Ta bara bort ett fält med metadata från ett textvärde.
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
