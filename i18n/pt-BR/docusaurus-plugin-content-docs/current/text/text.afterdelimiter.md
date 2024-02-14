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

Retorna a porção de <code>text</code> depois do <code>delimiter</code> especificado.    Um valor numérico opcional <code>index</code> indica a ocorrência do <code>delimiter</code> que deve ser considerada.    Uma lista opcional <code>index</code> indica a ocorrência do <code>delimiter</code> que deve ser considerada, assim como se a indexação deve ser feita a partir do início ou do final da entrada.


## Examples

### Example #1 
Obtenha a porção de &#34;111-222-333&#34; depois do (primeiro) hífen.
```powerquery
Text.AfterDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"222-333"
```


### Example #2 
Obtenha a porção de &#34;111-222-333&#34; depois do segundo hífen.
```powerquery
Text.AfterDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"333"
```


### Example #3 
Obtenha a porção de &#34;111-222-333&#34; depois do segundo hífen a partir do fim.
```powerquery
Text.AfterDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"222-333"
```




## Category
Text.Transformations
