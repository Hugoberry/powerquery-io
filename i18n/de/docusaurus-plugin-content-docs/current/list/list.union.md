---
title: List.Union
---

# List.Union


Gibt die Vereinigungsmenge der Listenwerte aus der Eingabe zurück.


## Syntax

```powerquery
List.Union(
    lists as list,
    optional equationCriteria as any
) as list
```


## Remarks

Akzeptiert eine Liste mit Listen (`lists`), vereinigt die Elemente der einzelnen Listen und gibt sie in der Ausgabeliste zurück. Das Ergebnis ist eine Liste mit allen Elementen aus sämtlichen Eingabelisten. Da bei diesem Vorgang die herkömmliche Behältersemantik erhalten bleibt, werden Duplikatwerte im Rahmen der Vereinigung abgeglichen. Zum Steuern der Gleichheitsüberprüfung kann ein optionales Gleichungskriterium (`equationCriteria`) angegeben werden.


## Examples

### Example #1
Erstellt eine Vereinigungsmenge der Listen "\{1..5\}", "\{2..6\}" und "\{3..7\}".
```powerquery
List.Union({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6, 7}
```




## Category
List.Set operations
