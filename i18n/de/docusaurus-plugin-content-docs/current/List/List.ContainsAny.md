---
title: List.ContainsAny
---

# List.ContainsAny


## Description

Gibt an, ob eine Liste mindestens einen der Werte aus einer anderen Liste enthält.


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Details

Gibt an, ob die Liste "<code>list</code>" mindestens einen der Werte aus einer anderen Liste (<code>values</code>) enthält.        Gibt "true" zurück, wenn der Wert in der Liste gefunden wird. Andernfalls wird "false" zurückgegeben. Zum Steuern der Gleichheitsüberprüfung kann ein optionales Gleichungskriterium (<code>equationCriteria</code>) angegeben werden. 


## Examples

### Example #1 
Ermittelt, ob die Liste &#34;\{1, 2, 3, 4, 5}&#34; die Zahl 3 oder 9 enthält.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2 
Ermittelt, ob die Liste &#34;\{1, 2, 3, 4, 5}&#34; die Zahl 6 oder 7 enthält.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
