---
title: List.Difference
---

# List.Difference


Gibt den Unterschied zwischen den beiden angegebenen Listen zurück.


## Syntax

```powerquery
List.Difference(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Remarks

Gibt die Elemente aus der Liste "<code>list1</code>" zurück, die nicht in der Liste "<code>list2</code>" enthalten sind. Doppelte Werte werden unterstützt.    Zum Steuern der Gleichheitsüberprüfung kann ein optionales Gleichungskriterium (<code>equationCriteria</code>) angegeben werden. 


## Examples

### Example #1 
Ermittelt die Elemente der Liste „\{1, 2, 3, 4, 5}“, die nicht in der Liste „\{4, 5, 3}“ enthalten sind.
```powerquery
List.Difference({1, 2, 3, 4, 5}, {4, 5, 3})
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
Ermittelt die Elemente der Liste &#34;\{1, 2}&#34;, die nicht in der Liste &#34;\{1, 2, 3}&#34; enthalten sind.
```powerquery
List.Difference({1, 2}, {1, 2, 3})
```

Result: 
```powerquery
{}
```




## Category
List.Set operations
