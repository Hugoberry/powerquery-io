---
title: Value.RemoveMetadata
---

# Value.RemoveMetadata


Stript de invoer met metagegevens.


## Syntax

```powerquery
Value.RemoveMetadata(
    value as any,
    optional metaValue as any
) as any
```


## Remarks

Stript de invoer met metagegevens.


## Examples

### Example #1
Alle metagegevens uit een tekstwaarde verwijderen.
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
Verwijder slechts één veld met metagegevens uit een tekstwaarde.
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
