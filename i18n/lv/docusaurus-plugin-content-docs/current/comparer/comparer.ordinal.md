---
title: Comparer.Ordinal
---

# Comparer.Ordinal


Atgriež salīdzināšanas funkciju, kas izmanto kārtas skaitļa kārtulas, lai salīdzinātu vērtības.


## Syntax

```powerquery
Comparer.Ordinal(
    x as any,
    y as any
) as number
```


## Remarks

Atgriež salīdzinātāja funkciju, kas izmanto kārtas skaitļu kārtulas, lai salīdzinātu norādītās vērtības `x` un `y`.  
  
Salīdzināšanas funkcija pieņem divus argumentus un atgriež -1, 0 vai 1, balstoties uz to, vai pirmā vērtība ir mazāka, vienāda vai lielāka par otro vērtību.


## Examples

### Example #1
Izmantojot kārtas skaitļa kārtulas, salīdziniet, vai vērtības "encyclopædia" un "encyclopaedia" ir vienādas. Ņemiet vērā, ka šīs vērtības ir vienādas, izmantojot `Comparer.FromCulture("en-US")`.
```powerquery
Comparer.Equals(Comparer.Ordinal, "encyclopædia", "encyclopaedia")
```

Result: 
```powerquery
false
```




## Category
Comparer
