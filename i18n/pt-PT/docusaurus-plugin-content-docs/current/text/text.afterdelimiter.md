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

Devolve a parte de `text` após o `delimiter` especificado. Um valor numérico opcional `index` indica qual a ocorrência de `delimiter` que deve ser considerada. Uma lista opcional `index` indica qual a ocorrência de `delimiter` que deve ser considerada, bem como se a indexação deve ser feita a partir do início ou do fim da entrada.


## Examples

### Example #1
Obtenha a parte de "111-222-333" após o (primeiro) hífen.
```powerquery
Text.AfterDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"222-333"
```


### Example #2
Obtenha a parte de "111-222-333" após o segundo hífen.
```powerquery
Text.AfterDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"333"
```


### Example #3
Obtenha a parte de "111-222-333" após o segundo hífen a partir do fim.
```powerquery
Text.AfterDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"222-333"
```




## Category
Text.Transformations
