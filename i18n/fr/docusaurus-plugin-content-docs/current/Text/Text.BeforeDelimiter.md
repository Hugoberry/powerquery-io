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

Retourne la partie de <code>text</code> avant le <code>delimiter</code> spécifié.    Un numérique facultatif <code>index</code> indique quelle occurrence du <code>delimiter</code> doit être considérée.    Une liste facultative <code>index</code> indique quelle occurrence du <code>delimiter</code> doit être considérée, et si l'indexation doit être effectuée à partir du début ou de la fin de l'entrée.


## Examples

### Example #1 
Obtenez la partie de &#34; 111-222-333 &#34; avant le (premier) trait d&#39;union.
```powerquery
Text.BeforeDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"111"
```


### Example #2 
Obtenez la partie de &#34; 111-222-333 &#34; avant le deuxième trait d&#39;union.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"111-222"
```


### Example #3 
Obtenez la partie de &#34; 111-222-333 &#34; avant le deuxième trait d&#39;union à partir de la fin.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"111"
```




## Category
Text.Transformations
