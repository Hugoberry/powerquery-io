---
title: Comparer.FromCulture
---

# Comparer.FromCulture


Atgriež salīdzināšanas funkciju atbilstoši norādītajai kultūrai un reģistrjutīgumam.


## Syntax

```powerquery
Comparer.FromCulture(
    culture as text,
    optional ignoreCase as logical
) as function
```


## Remarks

Atgriež salīdzināšanas funkciju, kas salīdzināšanai izmanto `culture` un `ignoreCase` norādīto reģistrjutību.  
  
Salīdzināšanas funkcija pieņem divus argumentus un atgriež -1, 0 vai 1, pamatojoties uz to, vai pirmā vērtība ir mazāka par, vienāda ar vai lielāka par otro.  
  
Noklusējuma vērtība `ignoreCase` ir “nepatiess”. `culture` jābūt vienai no .NET struktūras atbalstītajām lokalizācijām (piemēram, "lv-LV").


## Examples

### Example #1
Lai noteiktu, vai vērtības ir vienādas, salīdziniet "a" un "A", izmantojot lokalizāciju "en-US".
```powerquery
Comparer.FromCulture("en-US")("a", "A")
```

Result: 
```powerquery
-1
```


### Example #2
Lai noteiktu, vai vērtības ir vienādas, salīdziniet "a" un "A", izmantojot lokalizāciju "en-US" un ignorējot lielo/mazo burtu lietojumu.
```powerquery
Comparer.FromCulture("en-US", true)("a", "A")
```

Result: 
```powerquery
0
```




## Category
Comparer
