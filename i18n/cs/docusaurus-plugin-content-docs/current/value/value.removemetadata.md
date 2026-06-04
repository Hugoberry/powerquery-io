---
title: Value.RemoveMetadata
---

# Value.RemoveMetadata


Odebere ze vstupu metadata.


## Syntax

```powerquery
Value.RemoveMetadata(
    value as any,
    optional metaValue as any
) as any
```


## Remarks

Odebere ze vstupu metadata.


## Examples

### Example #1
Odeberte z textové hodnoty všechna metadata.
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
Odeberte z textové hodnoty pouze jedno pole metadat.
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
