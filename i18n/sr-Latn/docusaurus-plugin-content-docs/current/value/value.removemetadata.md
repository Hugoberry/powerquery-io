---
title: Value.RemoveMetadata
---

# Value.RemoveMetadata


Uklanja metapodatke iz unosa.


## Syntax

```powerquery
Value.RemoveMetadata(
    value as any,
    optional metaValue as any
) as any
```


## Remarks

Uklanja metapodatke iz unosa.


## Examples

### Example #1
Uklonite sve metapodatke iz tekstualne vrednosti.
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
Uklonite samo jedno polje metapodataka iz tekstualne vrednosti.
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
