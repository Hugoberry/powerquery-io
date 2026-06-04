---
title: Number.IsEven
---

# Number.IsEven


Indică dacă valoarea este pară.


## Syntax

```powerquery
Number.IsEven(
    number as number
) as logical
```


## Remarks

Indică dacă valoarea, `number`, este pară returnând `true` dacă este pară; în caz contrar, returnează `false`.


## Examples

### Example #1
Verificaţi dacă 625 este un număr par.
```powerquery
Number.IsEven(625)
```

Result: 
```powerquery
false
```


### Example #2
Verificaţi dacă 82 este un număr par.
```powerquery
Number.IsEven(82)
```

Result: 
```powerquery
true
```




## Category
Number.Information
