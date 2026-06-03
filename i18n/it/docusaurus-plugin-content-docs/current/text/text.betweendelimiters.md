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

Restituisce la porzione di `text` tra gli oggetti `startDelimiter` e `endDelimiter` specificati. Un valore numerico `startIndex` facoltativo indica quale occorrenza di `startDelimiter` prendere in considerazione. Un elenco `startIndex` facoltativo indica quale occorrenza di `startDelimiter` prendere in considerazione e se eseguire l'indicizzazione dall'inizio o dalla fine dell'input. `endIndex` è simile, ma l'indicizzazione viene eseguita rispetto a `startIndex`.


## Examples

### Example #1
Ottiene la porzione di "111 (222) 333 (444)" tra la (prima) parentesi aperta e la (prima) parentesi chiusa che la segue.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")")
```

Result: 
```powerquery
"222"
```


### Example #2
Ottiene la porzione di "111 (222) 333 (444)" tra la seconda parentesi aperta e la prima parentesi chiusa che la segue.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", 1, 0)
```

Result: 
```powerquery
"444"
```


### Example #3
Ottiene la porzione di "111 (222) 333 (444)" tra la seconda parentesi aperta a partire dalla fine e la seconda parentesi chiusa che la segue.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", {1, RelativePosition.FromEnd}, {1, RelativePosition.FromStart})
```

Result: 
```powerquery
"222) 333 (444"
```




## Category
Text.Transformations
