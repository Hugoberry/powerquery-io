---
title: List.ReplaceRange
---

# List.ReplaceRange


## Description

Ersetzt die angegebene Anzahl von Werten ab einer bestimmten Position durch die Ersatzwerte.


## Syntax

```powerquery
List.ReplaceRange(
    list as list,
    index as number,
    count as number,
    replaceWith as list
) as list
```


## Details

Ersetzt <code>count</code> Werte in "<code>list</code>" ab der angegebenen Position (<code>index</code>) durch die Liste "<code>replaceWith</code>".


## Examples

### Example #1 
Ersetzt &#34;\{7, 8, 9}&#34; in der Liste &#34;\{1, 2, 7, 8, 9, 5}&#34; durch &#34;\{3, 4}&#34;.
```powerquery
List.ReplaceRange({1, 2, 7, 8, 9, 5}, 2, 3, {3, 4})
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
