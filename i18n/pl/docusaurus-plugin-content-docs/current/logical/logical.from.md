---
title: Logical.From
---

# Logical.From


Tworzy wartość logiczną na podstawie danej wartości.


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Remarks

Zwraca wartość typu `logical` z danej wartości parametru `value`. Jeśli dany parametr `value` ma wartość `null`, funkcja `Logical.From` zwraca wartość `null`. Jeśli dany parametr `value` ma wartość typu `logical`, zwracana jest wartość `value`. Na wartość typu `logical` można konwertować wartości następujących typów:

-   `text`: wartość typu `logical` utworzona na podstawie wartości tekstowej (`"true"` lub `"false"`). Zobacz opis funkcji `Logical.FromText`, aby uzyskać szczegółowe informacje.
-   `number`: wartość `false`, jeśli wartość `value` równa się `0` — w przeciwnym razie wartość `true`.

Jeśli wartość parametru `value` jest innego typu, jest zwracany błąd.


## Examples

### Example #1
Przekonwertuj wartość `2` na wartość typu `logical`.
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical
