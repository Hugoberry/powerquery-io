---
title: Text.AfterDelimiter
---

# Text.AfterDelimiter


## Description

Text.AfterDelimiter


## Syntax

```powerquery
Text.AfterDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Details

Retourne la partie de <code>text</code> après le <code>delimiter</code> spécifié.    Un numérique facultatif <code>index</code> indique quelle occurrence du <code>delimiter</code> doit être considérée.    Une liste facultative <code>index</code> indique quelle occurrence du <code>delimiter</code> doit être considérée, et si l'indexation doit être effectuée à partir du début ou de la fin de l'entrée.


## Examples

### Example #1 
Obtenez la partie de &#34; 111-222-333 &#34; après le (premier) trait d&#39;union.
```powerquery
Text.AfterDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"222-333"
```


### Example #2 
Obtenez la partie de &#34; 111-222-333 &#34; après le deuxième trait d&#39;union.
```powerquery
Text.AfterDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"333"
```


### Example #3 
Obtenez la partie de &#34; 111-222-333 &#34; après le deuxième trait d&#39;union à partir de la fin.
```powerquery
Text.AfterDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"222-333"
```




## Category
Text.Transformations
