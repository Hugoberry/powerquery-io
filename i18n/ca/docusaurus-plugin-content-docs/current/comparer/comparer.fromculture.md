---
title: Comparer.FromCulture
---

# Comparer.FromCulture


Retorna una funció de comparador basada en la cultura i la sensibilitat de majúscules i minúscules especificades.


## Syntax

```powerquery
Comparer.FromCulture(
    culture as text,
    optional ignoreCase as logical
) as function
```


## Remarks

Retorna una funció de comparador que utilitza el `culture` i la sensibilitat de majúscules i minúscules especificada per l'`ignoreCase` per fer comparacions.  
  
Una funció de comparador accepta dos arguments i retorna -1, 0 o 1 en funció de si el primer valor és menor, igual o més gran que el segon.  
  
El valor per defecte de `ignoreCase` és fals. La `culture` ha de ser una de les configuracions regionals admeses pel .NET Framework (per exemple, "en-US").


## Examples

### Example #1
Compareu "a" i "A" mitjançant la configuració regional "en-US" per determinar si els valors són iguals.
```powerquery
Comparer.FromCulture("en-US")("a", "A")
```

Result: 
```powerquery
-1
```


### Example #2
Compareu "a" i "A" mitjançant la configuració regional "en-US" i ignorant l'ús de majúscules i minúscules per determinar si els valors són iguals.
```powerquery
Comparer.FromCulture("en-US", true)("a", "A")
```

Result: 
```powerquery
0
```




## Category
Comparer
