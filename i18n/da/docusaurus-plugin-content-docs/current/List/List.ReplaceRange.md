---
title: List.ReplaceRange
---

# List.ReplaceRange


## Description

Erstatter antallet af talte værdier med start ved positionen med erstatningsværdierne.


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

Erstatter <code>count</code> værdier i <code>list</code> med listen <code>replaceWith</code> med start ved den angivne position, <code>index</code>.


## Examples

### Example #1 
Erstat \{7, 8, 9} på listen \{1, 2, 7, 8, 9, 5} med \{3, 4}.
```powerquery
List.ReplaceRange({1, 2, 7, 8, 9, 5}, 2, 3, {3, 4})
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
