---
title: Duration.From
---

# Duration.From


Tworzy wartość typu duration na podstawie danej wartości.


## Syntax

```powerquery
Duration.From(
    value as any
) as duration
```


## Remarks

Zwraca wartość czasu trwania z danej wartości.

-   `value`: wartość, z której pochodzi duration. Jeśli `value` ma wartość `null`, ta funkcja zwraca wartość `null`. Jeśli `value` to `duration`, zwracana jest wartość `value`. Wartości następujących typów można przekonwertować na wartość `duration`:
    -   `text`: wartość `duration` z tekstowych formularzy czasu, który upłynął (d.h:m:s). Aby uzyskać szczegółowe informacje, zobacz `Duration.FromText`.
    -   `number`: odpowiednik `duration` dla liczby dni całkowitych i ułamkowych wyrażonych przez `value`.

Jeśli `value` jest innego typu, zwracany jest błąd.


## Examples

### Example #1
Przekonwertuj wartość `2.525` na wartość typu `duration`.
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```


### Example #2
Przekonwertuj wartość tekstową `"2.05:55:20.34567"` na wartość `duration`.
```powerquery
Duration.From("2.05:55:20.34567")
```

Result: 
```powerquery
#duration(2, 5, 55, 20.3456700)
```




## Category
Duration
