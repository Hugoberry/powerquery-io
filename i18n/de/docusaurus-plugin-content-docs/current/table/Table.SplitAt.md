---
title: Table.SplitAt
---

# Table.SplitAt


Gibt eine Liste zurück, welche die ersten angegebenen zu zählenden Zeilen und die restlichen Zeilen enthält.


## Syntax

```powerquery
Table.SplitAt(
    table as table,
    count as number
) as list
```


## Remarks

Gibt eine Liste mit zwei Tabellen zurück: eine Tabelle mit den ersten N Zeilen von <code>table</code> (wie in <code>count</code> angegeben) und eine Tabelle, welche die restlichen Zeilen von <code>table</code> enthält.Wenn die Tabellen der resultierenden Liste genau einmal und in der Reihenfolge aufgezählt werden, zählt die Funktion <code>table</code> nur einmal auf.


## Examples

### Example #1 
Geben Sie die ersten zwei Zeilen der Tabelle zurück und die restlichen Zeilen der Tabelle.
```powerquery
Table.SplitAt(#table({"a", "b", "c"}, {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}), 2)
```

Result: 
```powerquery
{
    #table({"a", "b", "c"}, {{1, 2, 3}, {4, 5, 6}}),
    #table({"a", "b", "c"}, {{7, 8, 9}})
}
```




## Category
Table.Row operations
