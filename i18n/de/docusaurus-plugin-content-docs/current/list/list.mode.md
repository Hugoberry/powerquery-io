---
title: List.Mode
---

# List.Mode


Gibt den am häufigsten vorkommenden Wert in der Liste zurück.


## Syntax

```powerquery
List.Mode(
    list as list,
    optional equationCriteria as any
) as any
```


## Remarks

Gibt das Element zurück, das am häufigsten in `list` angezeigt wird. Wenn die Liste leer ist, wird ein Fehler ausgelöst. Wenn mehrere Elemente mit derselben maximalen Häufigkeit angezeigt werden, wird das letzte Element ausgewählt. Ein optionaler Wert für Vergleichskriterien `equationCriteria` kann angegeben werden, um Gleichstellungstests zu steuern.


## Examples

### Example #1
Ermittelt das Element, das in der Liste `{"A", 1, 2, 3, 3, 4, 5}` am häufigsten vorkommt.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5})
```

Result: 
```powerquery
3
```


### Example #2
Ermittelt das Element, das in der Liste `{"A", 1, 2, 3, 3, 4, 5, 5}` am häufigsten vorkommt.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
5
```




## Category
List.Averages
