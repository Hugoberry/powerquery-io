---
title: Comparer.OrdinalIgnoreCase
---

# Comparer.OrdinalIgnoreCase


Atgriež salīdzināšanas funkciju, kura nav reģistrjutīga un kura norādīto vērtību salīdzināšanai izmanto kārtas kārtulas.


## Syntax

```powerquery
Comparer.OrdinalIgnoreCase(
    x as any,
    y as any
) as number
```


## Remarks

Atgriež reģistrnejutīgu salīdzinātāja funkciju, kas izmanto kārtas skaitļu kārtulas, lai salīdzinātu norādītās vērtības `x` un `y`.  
  
Salīdzināšanas funkcija pieņem divus argumentus un atgriež -1, 0 vai 1, balstoties uz to, vai pirmā vērtība ir mazāka, vienāda vai lielāka par otro vērtību.


## Examples

### Example #1
Izmantojot kārtas kārtulas, kas nav reģistrjutīgas, salīdzina "Abc" un "abc". Izmantojot `Comparer.Ordinal`, "Abc" ir mazāks nekā "abc".
```powerquery
Comparer.OrdinalIgnoreCase("Abc", "abc")
```

Result: 
```powerquery
0
```




## Category
Comparer
