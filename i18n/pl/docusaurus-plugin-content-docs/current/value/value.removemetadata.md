---
title: Value.RemoveMetadata
---

# Value.RemoveMetadata


Rozdziela wprowadzane metadane.


## Syntax

```powerquery
Value.RemoveMetadata(
    value as any,
    optional metaValue as any
) as any
```


## Remarks

Rozdziela wprowadzane metadane.


## Examples

### Example #1
Usuń wszystkie metadane z wartości tekstowej.
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
Usuń tylko jedno pole metadanych z wartości tekstowej.
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
