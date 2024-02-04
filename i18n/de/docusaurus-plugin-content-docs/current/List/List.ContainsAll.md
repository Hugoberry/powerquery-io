---
title: List.ContainsAll
---

# List.ContainsAll


## Description

Gibt an, ob eine Liste alle Werte aus einer anderen Liste enthält.


## Syntax

```powerquery
List.ContainsAll(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Details

Gibt an, ob die Liste "<code>list</code>" alle Werte aus einer anderen Liste (<code>values</code>) enthält.    Gibt "true" zurück, wenn der Wert in der Liste gefunden wird. Andernfalls wird "false" zurückgegeben. Zum Steuern der Gleichheitsüberprüfung kann ein optionales Gleichungskriterium (<code>equationCriteria</code>) angegeben werden. 


## Examples

### Example #1 
Ermittelt, ob die Liste &#34;\{1, 2, 3, 4, 5}&#34; die Zahlen 3 und 4 enthält.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {3, 4})
```

Result: 
```powerquery
true
```


### Example #2 
Ermittelt, ob die Liste &#34;\{1, 2, 3, 4, 5}&#34; die Zahlen 5 und 6 enthält.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {5, 6})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
