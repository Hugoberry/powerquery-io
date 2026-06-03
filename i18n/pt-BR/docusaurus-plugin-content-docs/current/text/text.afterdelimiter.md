---
title: Text.AfterDelimiter
---

# Text.AfterDelimiter


Text.AfterDelimiter


## Syntax

```powerquery
Text.AfterDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Remarks

Retorna a porção de `text` depois do `delimiter` especificado. Um valor numérico opcional `index` indica a ocorrência do `delimiter` que deve ser considerada. Uma lista opcional `index` indica a ocorrência do `delimiter` que deve ser considerada, assim como se a indexação deve ser feita a partir do início ou do final da entrada.


## Examples

### Example #1
Obtenha a porção de "111-222-333" depois do (primeiro) hífen.
```powerquery
Text.AfterDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"222-333"
```


### Example #2
Obtenha a porção de "111-222-333" depois do segundo hífen.
```powerquery
Text.AfterDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"333"
```


### Example #3
Obtenha a porção de "111-222-333" depois do segundo hífen a partir do fim.
```powerquery
Text.AfterDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"222-333"
```




## Category
Text.Transformations
