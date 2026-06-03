---
title: Text.BeforeDelimiter
---

# Text.BeforeDelimiter


Text.BeforeDelimiter


## Syntax

```powerquery
Text.BeforeDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Remarks

Retorna a porção de `text` antes do `delimiter` especificado. Um valor numérico opcional `index` indica qual ocorrência do `delimiter` deve ser considerada. Uma lista opcional `index` indica a ocorrência do `delimiter` que deve ser considerada, assim como se a indexação deve ser feita a partir do início ou do final da entrada.


## Examples

### Example #1
Obtenha a porção de "111-222-333" antes do (primeiro) hífen.
```powerquery
Text.BeforeDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"111"
```


### Example #2
Obtenha a porção de "111-222-333" antes do segundo hífen.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"111-222"
```


### Example #3
Obtenha a porção de "111-222-333" antes do segundo hífen a partir do fim.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"111"
```




## Category
Text.Transformations
