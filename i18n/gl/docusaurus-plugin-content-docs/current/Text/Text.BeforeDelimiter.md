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

Devolve a parte de <code>text</code> que está antes do <code>delimiter</code> que se especifique.    Un <code>index</code> numérico opcional indica o <code>delimiter</code> que se debe considerar.    Unha lista opcional <code>index</code> indica o <code>delimiter</code> que se debe considerar, e tamén se a indexación se debe facer desde o principio ou desde o final da entrada.


## Examples

### Example #1 
Obteña a parte de &#34;111-222-333&#34; que está antes do (primeiro) trazo.
```powerquery
Text.BeforeDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"111"
```


### Example #2 
Obteña a parte de &#34;111-222-333&#34; que está antes do segundo trazo.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"111-222"
```


### Example #3 
Obteña a parte de &#34;111-222-333&#34; que está antes do segundo trazo comezando desde o final.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"111"
```




## Category
Text.Transformations
