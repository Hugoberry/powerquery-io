---
title: Comparer.Ordinal
---

# Comparer.Ordinal


Restituisce una funzione operatore di confronto che usa regole ordinali per confrontare i valori.


## Syntax

```powerquery
Comparer.Ordinal(
    x as any,
    y as any
) as number
```


## Remarks

Restituisce una funzione di confronto che utilizza regole ordinali per confrontare i valori specificati `x` e `y`.  
  
Una funzione di confronto accetta due argomenti e restituisce -1, 0 o 1 a seconda che il primo valore sia minore, uguale o maggiore del secondo.


## Examples

### Example #1
Tramite le regole ordinali, confronta se "encyclopædia" e "encyclopaedia" sono equivalenti. Si noti che usando `Comparer.FromCulture("en-US")`, questi sono equivalenti.
```powerquery
Comparer.Equals(Comparer.Ordinal, "encyclopædia", "encyclopaedia")
```

Result: 
```powerquery
false
```




## Category
Comparer
