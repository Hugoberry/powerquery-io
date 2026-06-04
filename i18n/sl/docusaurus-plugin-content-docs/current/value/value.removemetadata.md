---
title: Value.RemoveMetadata
---

# Value.RemoveMetadata


Odstrani vnos metapodatkov.


## Syntax

```powerquery
Value.RemoveMetadata(
    value as any,
    optional metaValue as any
) as any
```


## Remarks

Odstrani vnos metapodatkov.


## Examples

### Example #1
Odstranite vse metapodatke iz besedilne vrednosti.
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
Odstranite samo eno polje metapodatkov iz besedilne vrednosti.
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
