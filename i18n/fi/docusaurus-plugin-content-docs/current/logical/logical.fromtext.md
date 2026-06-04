---
title: Logical.FromText
---

# Logical.FromText


Luo loogisen arvon tekstiarvoista true ja false.


## Syntax

```powerquery
Logical.FromText(
    text as text
) as logical
```


## Remarks

Luo tekstiarvosta `text` loogisen arvon, joka on joko true tai false. Jos `text` sisältää eri merkkijonon, esiin tulee virhe. Tekstiarvossa `text` kirjainkoko on merkitsevä.


## Examples

### Example #1
Luo looginen arvo tekstimerkkijonosta true.
```powerquery
Logical.FromText("true")
```

Result: 
```powerquery
true
```


### Example #2
Luo looginen arvo tekstimerkkijonosta a.
```powerquery
Logical.FromText("a")
```

Result: 
```powerquery
[Expression.Error] Could not convert to a logical.
```




## Category
Logical
