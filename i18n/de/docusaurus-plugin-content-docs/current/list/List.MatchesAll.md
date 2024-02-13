---
title: List.MatchesAll
---

# List.MatchesAll


Gibt &#34;true&#34; zurück, wenn die Bedingungsfunktion von alle Werten in der Liste erfüllt wird.


## Syntax

```powerquery
List.MatchesAll(
    list as list,
    condition as function
) as logical
```


## Remarks

Gibt <code>true</code> zurück, wenn die Bedingungsfunktion "<code>condition</code>" von allen Werten in der Liste "<code>list</code>" erfüllt wird. Andernfalls wird <code>false</code> zurückgegeben.


## Examples

### Example #1 
Ermittelt, ob alle Werte in der Liste &#34;\{11, 12, 13}&#34; größer zehn sind.
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
Ermittelt, ob alle Werte in der Liste &#34;\{1, 2, 3}&#34; größer zehn sind.
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
