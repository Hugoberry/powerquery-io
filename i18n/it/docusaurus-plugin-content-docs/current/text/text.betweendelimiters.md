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

Restituisce la porzione di <code>text</code> tra gli oggetti <code>startDelimiter</code> e <code>endDelimiter</code> specificati.    Un valore numerico <code>startIndex</code> facoltativo indica quale occorrenza di <code>startDelimiter</code> prendere in considerazione.    Un elenco <code>startIndex</code> facoltativo indica quale occorrenza di <code>startDelimiter</code> prendere in considerazione e se eseguire l'indicizzazione dall'inizio o dalla fine dell'input.    <code>endIndex</code> è simile, ma l'indicizzazione viene eseguita rispetto a <code>startIndex</code>.


## Examples

### Example #1 
Ottiene la porzione di &#34;111 (222) 333 (444)&#34; tra la (prima) parentesi aperta e la (prima) parentesi chiusa che la segue.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")")
```

Result: 
```powerquery
"222"
```


### Example #2 
Ottiene la porzione di &#34;111 (222) 333 (444)&#34; tra la seconda parentesi aperta e la prima parentesi chiusa che la segue.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", 1, 0)
```

Result: 
```powerquery
"444"
```


### Example #3 
Ottiene la porzione di &#34;111 (222) 333 (444)&#34; tra la seconda parentesi aperta a partire dalla fine e la seconda parentesi chiusa che la segue.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", {1, RelativePosition.FromEnd}, {1, RelativePosition.FromStart})
```

Result: 
```powerquery
"222) 333 (444"
```




## Category
Text.Transformations
