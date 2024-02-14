---
title: Text.BetweenDelimiters
---

# Text.BetweenDelimiters


Text.BetweenDelimiters


## Syntax

```powerquery
Text.BetweenDelimiters(
    text as text,
    startDelimiter as text,
    endDelimiter as text,
    optional startIndex as any,
    optional endIndex as any
) as any
```


## Remarks

Retourne la partie de <code>text</code> entre le <code>startDelimiter</code> et le <code>endDelimiter</code> spécifiés.    Un numérique facultatif <code>startIndex</code> indique quelle occurrence du <code>startDelimiter</code> doit être considérée.    Une liste facultative <code>startIndex</code> indique quelle occurrence du <code>startDelimiter</code> doit être considérée, et si l'indexation doit être effectuée à partir du début ou de la fin de l'entrée.    Le <code>endIndex</code> est similaire, excepté que l'indexation est effectuée relativement au <code>startIndex</code>.


## Examples

### Example #1 
Obtenez la partie de &#34; 111 (222) 333 (444) &#34; entre la (première) parenthèse ouvrante et la (première) parenthèse fermante qui la suit.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")")
```

Result: 
```powerquery
"222"
```


### Example #2 
Obtenez la partie de &#34; 111 (222) 333 (444) &#34; entre la deuxième parenthèse ouvrante et la première parenthèse fermante qui la suit.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", 1, 0)
```

Result: 
```powerquery
"444"
```


### Example #3 
Obtenez la partie de &#34; 111 (222) 333 (444) &#34; entre la deuxième parenthèse ouvrante à partir de la fin et la deuxième parenthèse fermante qui la suit.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", {1, RelativePosition.FromEnd}, {1, RelativePosition.FromStart})
```

Result: 
```powerquery
"222) 333 (444"
```




## Category
Text.Transformations
