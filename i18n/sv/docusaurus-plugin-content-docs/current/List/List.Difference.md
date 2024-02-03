---
title: List.Difference
---

# List.Difference


## Description

Returnerar skillnaden mellan de två angivna listorna.


## Syntax

```powerquery
List.Difference(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Details

Returnerar objekten i listan <code>list1</code> som inte finns med i listan <code>list2</code>. Dubblettvärden stöds.    Ett valfritt ekvationsvillkorsvärde, <code>equationCriteria</code>, kan anges för att hantera likhetstestning. 


## Examples

### Example #1 
Hitta de objekt i listan \{1, 2, 3, 4, 5} som inte finns med i \{4, 5, 3}.
```powerquery
List.Difference({1, 2, 3, 4, 5}, {4, 5, 3})
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
Hitta de objekt i listan \{1, 2} som inte finns med i \{1, 2, 3}.
```powerquery
List.Difference({1, 2}, {1, 2, 3})
```

Result: 
```powerquery
{}
```




## Category
List.Set operations
