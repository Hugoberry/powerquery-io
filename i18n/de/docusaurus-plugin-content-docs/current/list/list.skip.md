---
title: List.Skip
---

# List.Skip


Gibt eine Liste zurück, in der die angegebene Anzahl von Elementen am Listenanfang übersprungen wird.


## Syntax

```powerquery
List.Skip(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

Gibt eine Liste zurück, in der das erste Element der Liste `list` übersprungen wird. Wenn `list` eine leere Liste ist, wird eine leere Liste zurückgegeben. Diese Funktion verwendet den optionalen Parameter `countOrCondition`, um das Überspringen mehrerer Werte zu unterstützen, wie unten aufgeführt.

-   Wenn eine Anzahl angegeben wird, werden Elemente bis zu der Anzahl übersprungen.
-   Wenn eine Bedingung angegeben wird, werden alle aufeinander folgenden übereinstimmenden Elemente am Anfang von `list` übersprungen.
-   Wenn dieser Parameter NULL ist, wird das Standardverhalten beobachtet.


## Examples

### Example #1
Erstellt eine Liste auf der Grundlage von '\{1, 2, 3, 4, 5\}' ohne die ersten drei Zahlen.
```powerquery
List.Skip({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2
Erstellt eine Liste auf der Grundlage von "\{5, 4, 2, 6, 1\}", die mit einer Zahl kleiner 3 beginnt.
```powerquery
List.Skip({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Selection
