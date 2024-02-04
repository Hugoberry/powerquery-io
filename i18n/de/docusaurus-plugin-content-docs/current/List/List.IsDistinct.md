---
title: List.IsDistinct
---

# List.IsDistinct


## Description

Gibt an, ob die Liste Duplikate enthält.


## Syntax

```powerquery
List.IsDistinct(
    list as list,
    optional equationCriteria as any
) as logical
```


## Details

Gibt einen logischen Wert zurück, der angibt, ob die Liste "<code>list</code>" Duplikate enthält: <code>true</code>, falls die Liste eindeutige Werte enthält, <code>false</code>, falls Duplikatwerte vorhanden sind. 


## Examples

### Example #1 
Ermittelt, ob die Liste &#34;\{1, 2, 3}&#34; eindeutige Werte (also keine Duplikate) enthält.
```powerquery
List.IsDistinct({1, 2, 3})
```

Result: 
```powerquery
true
```


### Example #2 
Ermittelt, ob die Liste &#34;\{1, 2, 3, 3}&#34; eindeutige Werte (also keine Duplikate) enthält.
```powerquery
List.IsDistinct({1, 2, 3, 3})
```

Result: 
```powerquery
false
```




## Category
List.Selection
