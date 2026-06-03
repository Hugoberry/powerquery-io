---
title: Duration.TotalSeconds
---

# Duration.TotalSeconds


Gibt die Gesamtanzahl von Sekunden für diese Dauer zurück.


## Syntax

```powerquery
Duration.TotalSeconds(
    duration as duration
) as number
```


## Remarks

Gibt die Gesamtzahl der Sekunden zurück, die von `duration` umfasst werden.


## Examples

### Example #1
Die Gesamtanzahl der Sekunden suchen, die sich über einen Dauerwert erstrecken.
```powerquery
Duration.TotalSeconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
446582
```




## Category
Duration
