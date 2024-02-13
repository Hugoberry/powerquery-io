---
title: List.MatchesAll
---

# List.MatchesAll


Restituisce true se la funzione di condizione viene soddisfatta da tutti i valori dell&#39;elenco.


## Syntax

```powerquery
List.MatchesAll(
    list as list,
    condition as function
) as logical
```


## Remarks

Restituisce <code>true</code> se la funzione di condizione <code>condition</code> viene soddisfatta da tutti i valori dell'elenco <code>list</code>; in caso contrario <code>false</code>.


## Examples

### Example #1 
Determina se tutti i valori dell&#39;elenco \{11, 12, 13} sono maggiori di 0.
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
Determina se tutti i valori dell&#39;elenco \{1, 2, 3} sono maggiori di 0.
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
