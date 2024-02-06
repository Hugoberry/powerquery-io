---
title: List.MatchesAny
---

# List.MatchesAny


Gibt &#34;true&#34; zurück, wenn die Bedingungsfunktion durch einen beliebigen Wert erfüllt wird.


## Syntax

```powerquery
List.MatchesAny(
    list as list,
    condition as function
) as logical
```


## Remarks

Gibt <code>true</code> zurück, wenn die Bedingungsfunktion "<code>condition</code>" von beliebigen Werten in der Liste "<code>list</code>" erfüllt wird. Andernfalls wird <code>false</code> zurückgegeben.


## Examples

### Example #1 
Ermittelt, ob ein beliebiger Wert in der Liste &#34;\{9, 10, 11}&#34; größer zehn ist.
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
Ermittelt, ob ein beliebiger Wert in der Liste &#34;\{1, 2, 3}&#34; größer zehn ist.
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
