---
title: List.Modes
---

# List.Modes


Gibt eine Liste mit den Werten zurück, die in der Liste am häufigsten vorkommen.


## Syntax

```powerquery
List.Modes(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

Gibt die Elemente zurück, die am häufigsten in `list` angezeigt werden. Wenn die Liste leer ist, wird ein Fehler ausgelöst. Wenn mehrere Elemente mit derselben maximalen Häufigkeit angezeigt werden, werden alle zurückgegeben. Ein optionaler Wert für Vergleichskriterien `equationCriteria` kann angegeben werden, um Gleichstellungstests zu steuern.


## Examples

### Example #1
Ermittelt die Elemente, die in der Liste `{"A", 1, 2, 3, 3, 4, 5, 5}` am häufigsten vorkommen.
```powerquery
List.Modes({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
{3, 5}
```




## Category
List.Averages
