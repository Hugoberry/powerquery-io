---
title: List.ReplaceMatchingItems
---

# List.ReplaceMatchingItems


## Description

Wendet jede Ersetzung vom Typ &#34;\{ old, new }&#34; an.


## Syntax

```powerquery
List.ReplaceMatchingItems(
    list as list,
    replacements as list,
    optional equationCriteria as any
) as list
```


## Details

Nimmt die angegebenen Ersetzungen in der Liste "<code>list</code>" vor. Ein Ersetzungsvorgang (<code>replacements</code>) besteht aus einer Liste mit zwei Werten (alter und neuer Wert), die in einer Liste bereitgestellt wird.    Zum Steuern der Gleichheitsüberprüfung kann ein optionales Gleichungskriterium (<code>equationCriteria</code>) angegeben werden.


## Examples

### Example #1 
Erstellt eine Liste auf der Grundlage von &#34;\{1, 2, 3, 4, 5}&#34;, in der der Wert 5 durch -5 und der Wert 1 durch -1 ersetzt wird.
```powerquery
List.ReplaceMatchingItems({1, 2, 3, 4, 5}, {{5, -5}, {1, -1}})
```

Result: 
```powerquery
{-1, 2, 3, 4, -5}
```




## Category
List.Transformation functions
