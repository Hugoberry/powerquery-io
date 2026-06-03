---
title: Comparer.OrdinalIgnoreCase
---

# Comparer.OrdinalIgnoreCase


Restituisce una funzione operatore di confronto senza distinzione tra maiuscole e minuscole che usa regole ordinali per confrontare i valori.


## Syntax

```powerquery
Comparer.OrdinalIgnoreCase(
    x as any,
    y as any
) as number
```


## Remarks

Restituisce una funzione di confronto senza distinzione tra maiuscole e minuscole che utilizza regole ordinali per confrontare i valori specificati `x` e `y`.  
  
Una funzione di confronto accetta due argomenti e restituisce -1, 0 o 1 a seconda che il primo valore sia minore, uguale o maggiore del secondo.


## Examples

### Example #1
Usando le regole di confronto ordinali senza distinzione tra maiuscole e minuscole, confrontare "Abc" con "abc". Notare che usando `Comparer.Ordinal`"Abc" è minore di "abc".
```powerquery
Comparer.OrdinalIgnoreCase("Abc", "abc")
```

Result: 
```powerquery
0
```




## Category
Comparer
