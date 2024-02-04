---
title: List.Contains
---

# List.Contains


## Description

Gibt an, ob die Liste den Wert enthält.


## Syntax

```powerquery
List.Contains(
    list as list,
    value as any,
    optional equationCriteria as any
) as logical
```


## Details

Gibt an, ob die Liste "<code>list</code>" den Wert "<code>value</code>" enthält.    Gibt TRUE zurück, wenn der Wert in der Liste gefunden wird. Andernfalls wird FALSE zurückgegeben. Zum Steuern der Gleichheitsüberprüfung kann ein optionales Gleichungskriterium (<code>equationCriteria</code>) angegeben werden. 


## Examples

### Example #1 
Ermittelt, ob die Liste &#34;\{1, 2, 3, 4, 5}&#34; die Zahl 3 enthält.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
true
```


### Example #2 
Ermittelt, ob die Liste &#34;\{1, 2, 3, 4, 5}&#34; die Zahl 6 enthält.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 6)
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
