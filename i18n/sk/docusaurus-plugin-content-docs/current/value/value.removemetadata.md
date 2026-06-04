---
title: Value.RemoveMetadata
---

# Value.RemoveMetadata


Rozdelí vstup metaúdajov na pásy.


## Syntax

```powerquery
Value.RemoveMetadata(
    value as any,
    optional metaValue as any
) as any
```


## Remarks

Rozdelí vstup metaúdajov na pásy.


## Examples

### Example #1
Odstráni všetky metaúdaje z textovej hodnoty.
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
Odstráni z textovej hodnoty iba jedno pole metaúdajov.
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
