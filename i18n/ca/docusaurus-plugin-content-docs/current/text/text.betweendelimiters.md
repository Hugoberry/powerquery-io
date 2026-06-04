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

Retorna la porció de `text` entre els valors `startDelimiter` i `endDelimiter` especificats. Un valor numèric opcional `startIndex` indica la freqüència del valor `startDelimiter` que s'ha de tenir en compte. Una llista opcional `startIndex` indica la freqüència del valor `startDelimiter` que s'ha de tenir en compte, i també si la indexació s'ha de fer des del principi o des del final de l'entrada. El valor `endIndex` és similar, i l'única diferència és que la indexació es fa amb relació a `startIndex`.


## Examples

### Example #1
Permet obtenir la porció d'"111 (222) 333 (444)" entre el primer parèntesi d'obertura i el primer parèntesi de tancament que el segueix.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")")
```

Result: 
```powerquery
"222"
```


### Example #2
Permet obtenir la porció d'"111 (222) 333 (444)" entre el segon parèntesi d'obertura i el primer parèntesi de tancament que el segueix.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", 1, 0)
```

Result: 
```powerquery
"444"
```


### Example #3
Permet obtenir la porció d'"111 (222) 333 (444)" entre el segon parèntesi d'obertura del parèntesi final i del segon parèntesi de tancament que el segueix.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", {1, RelativePosition.FromEnd}, {1, RelativePosition.FromStart})
```

Result: 
```powerquery
"222) 333 (444"
```




## Category
Text.Transformations
