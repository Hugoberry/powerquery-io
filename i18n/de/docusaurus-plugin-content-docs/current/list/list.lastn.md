---
title: List.LastN
---

# List.LastN


Gibt eine Liste der letzten Elemente in der angegebenen Liste zurück. Optional kann die zurückzugebende Anzahl oder eine qualifizierende Bedingung angegeben werden.


## Syntax

```powerquery
List.LastN(
    list as list,
    optional countOrCondition as any
) as any
```


## Remarks

Gibt eine Liste der letzten Elemente in der angegebenen Liste zurück.

-   `list`: Die zu untersuchende Liste. Wenn die Liste leer ist, wird eine leere Liste zurückgegeben.
-   `countOrCondition`: (Optional) Unterstützt das Sammeln mehrerer Elemente oder das Filtern von Elementen. Obwohl dieser Parameter als optional aufgeführt ist, tritt ein Fehler auf, wenn dieser Wert nicht angegeben wird oder `null` ist. Dieser Parameter kann auf zwei Arten angegeben werden:
    -   Wenn eine Zahl angegeben wird, werden bis zu so viele Elemente zurückgegeben.
    -   Wenn eine Bedingung angegeben wird, werden alle Elemente zurückgegeben, die die Bedingung erfüllen, beginnend am Ende der Liste. Sobald ein Element die Bedingung nicht erfüllt, werden keine weiteren Elemente berücksichtigt.


## Examples

### Example #1
Ermittelt den letzten Wert in der Liste "\{3, 4, 5, -1, 7, 8, 2\}".
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, 1)
```

Result: 
```powerquery
{2}
```


### Example #2
Ermittelt die letzten Werte in der Liste "\{3, 4, 5, -1, 7, 8, 2\}", die größer null sind.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{7, 8, 2}
```




## Category
List.Selection
