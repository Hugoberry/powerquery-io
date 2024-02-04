---
title: Text.BeforeDelimiter
---

# Text.BeforeDelimiter


## Description

Text.BeforeDelimiter


## Syntax

```powerquery
Text.BeforeDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Details

Devolve a parte de <code>text</code> antes do <code>delimiter</code> especificado.    Um valor numérico opcional <code>index</code> indica qual a ocorrência de <code>delimiter</code> que deve ser considerada.    Uma lista opcional <code>index</code> indica qual a ocorrência de <code>delimiter</code> que deve ser considerada, bem como se a indexação deve ser feita a partir do início ou do fim da entrada.


## Examples

### Example #1 
Obtenha a parte de &#34;111-222-333&#34; antes do (primeiro) hífen.
```powerquery
Text.BeforeDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"111"
```


### Example #2 
Obtenha a parte de &#34;111-222-333&#34; antes do segundo hífen.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"111-222"
```


### Example #3 
Obtenha a parte de &#34;111-222-333&#34; antes do segundo hífen a partir do fim.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"111"
```




## Category
Text.Transformations
