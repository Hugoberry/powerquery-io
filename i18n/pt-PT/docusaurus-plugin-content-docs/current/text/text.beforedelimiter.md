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

Devolve a parte de `text` antes do `delimiter` especificado. Um valor numérico opcional `index` indica qual a ocorrência de `delimiter` que deve ser considerada. Uma lista opcional `index` indica qual a ocorrência de `delimiter` que deve ser considerada, bem como se a indexação deve ser feita a partir do início ou do fim da entrada.


## Examples

### Example #1
Obtenha a parte de "111-222-333" antes do (primeiro) hífen.
```powerquery
Text.BeforeDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"111"
```


### Example #2
Obtenha a parte de "111-222-333" antes do segundo hífen.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"111-222"
```


### Example #3
Obtenha a parte de "111-222-333" antes do segundo hífen a partir do fim.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"111"
```




## Category
Text.Transformations
