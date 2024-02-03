---
title: Text.BetweenDelimiters
---

# Text.BetweenDelimiters


## Description

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


## Details

Retorna la porció de <code>text</code> entre els valors <code>startDelimiter</code> i <code>endDelimiter</code> especificats.    Un valor numèric opcional <code>startIndex</code> indica la freqüència del valor <code>startDelimiter</code> que s'ha de tenir en compte.    Una llista opcional <code>startIndex</code> indica la freqüència del valor <code>startDelimiter</code> que s'ha de tenir en compte, i també si la indexació s'ha de fer des del principi o des del final de l'entrada.    El valor <code>endIndex</code> és similar, i l'única diferència és que la indexació es fa amb relació a <code>startIndex</code>.


## Examples

### Example #1 
Permet obtenir la porció d&#39;&#34;111 (222) 333 (444)&#34; entre el primer parèntesi d&#39;obertura i el primer parèntesi de tancament que el segueix.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")")
```

Result: 
```powerquery
"222"
```


### Example #2 
Permet obtenir la porció d&#39;&#34;111 (222) 333 (444)&#34; entre el segon parèntesi d&#39;obertura i el primer parèntesi de tancament que el segueix.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", 1, 0)
```

Result: 
```powerquery
"444"
```


### Example #3 
Permet obtenir la porció d&#39;&#34;111 (222) 333 (444)&#34; entre el segon parèntesi d&#39;obertura del parèntesi final i del segon parèntesi de tancament que el segueix.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", {1, RelativePosition.FromEnd}, {1, RelativePosition.FromStart})
```

Result: 
```powerquery
"222) 333 (444"
```




## Category
Text.Transformations
