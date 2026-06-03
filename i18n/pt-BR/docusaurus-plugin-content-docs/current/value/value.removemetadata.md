---
title: Value.RemoveMetadata
---

# Value.RemoveMetadata


Distribui a entrada dos metadados.


## Syntax

```powerquery
Value.RemoveMetadata(
    value as any,
    optional metaValue as any
) as any
```


## Remarks

Distribui a entrada dos metadados.


## Examples

### Example #1
Remover todos os metadados de um valor de texto.
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
Remova apenas um campo de metadados de um valor de texto.
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
