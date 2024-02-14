---
title: List.SingleOrDefault
---

# List.SingleOrDefault


Zwraca jeden element z listy, jeśli lista ma długość 1, i wartość domyślną, gdy lista jest pusta.


## Syntax

```powerquery
List.SingleOrDefault(
    list as list,
    optional default as any
) as any
```


## Remarks

Jeśli na liście <code>list</code> znajduje się tylko jeden element, zwraca ten element.    Jeśli lista jest pusta, funkcja zwraca wartość null, chyba że określono opcjonalny parametr <code>default</code>. Jeśli na liście znajduje się więcej niż jeden element, funkcja zwraca błąd.


## Examples

### Example #1 
Znajdź pojedynczą wartość na liście \{1}.
```powerquery
List.SingleOrDefault({1})
```

Result: 
```powerquery
1
```


### Example #2 
Znajdź pojedynczą wartość na liście \{}.
```powerquery
List.SingleOrDefault({})
```

Result: 
```powerquery
null
```


### Example #3 
Znajdź pojedynczą wartość na liście \{}. Jeśli lista jest pusta, zwróć wartość -1.
```powerquery
List.SingleOrDefault({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
