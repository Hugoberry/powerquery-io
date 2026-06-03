---
title: Duration.From
---

# Duration.From


Erstellt eine Dauer auf der Grundlage des angegebenen Werts.


## Syntax

```powerquery
Duration.From(
    value as any
) as duration
```


## Remarks

Gibt einen Dauer-Wert aus dem angegebenen Wert zurück.

-   `value`: Der Wert, von dem die Dauer abgeleitet wird. Wenn der angegebene `value` `null` ist, gibt diese Funktion `null` zurück. Wenn der angegebene `value` eine `Dauer` ist, wird `value` zurückgegeben. Werte der folgenden Typen können in einen `Dauer`\-Wert konvertiert werden:
    -   `Text`: Ein `Dauer`\-Wert aus textuellen abgelaufene Zeitformaten (d:h:m:s). Weitere Informationen finden Sie unter `Duration.FromText`.
    -   `Zahl`: Ein `Dauer`\-Wert, der der Anzahl der ganzen und fraktionierten Tage entspricht, die durch `value` ausgedrückt werden.

Wenn `value` einen anderen Typ aufweist, wird ein Fehler zurückgegeben.


## Examples

### Example #1
Konvertiert `2.525` in einen `duration`\-Wert.
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```


### Example #2
Konvertieren des Textwerts `"2.05:55:20.34567"` in einen `Dauer`\-Wert.
```powerquery
Duration.From("2.05:55:20.34567")
```

Result: 
```powerquery
#duration(2, 5, 55, 20.3456700)
```




## Category
Duration
