---
title: List.MatchesAny
---

# List.MatchesAny


## Description

Restituisce true se la funzione di condizione viene soddisfatta da qualsiasi valore.


## Syntax

```powerquery
List.MatchesAny(
    list as list,
    condition as function
) as logical
```


## Details

Restituisce <code>true</code> se la funzione di condizione <code>condition</code> viene soddisfatta da uno dei valori dell'elenco <code>list</code>; in caso contrario <code>false</code>.


## Examples

### Example #1 
Verificare se uno dei valori dell&#39;elenco \{9, 10, 11} è maggiore di 10.
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
Verificare se uno dei valori dell&#39;elenco \{1, 2, 3} è maggiore di 10.
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
