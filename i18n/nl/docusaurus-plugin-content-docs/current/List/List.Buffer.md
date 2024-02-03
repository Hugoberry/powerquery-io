---
title: List.Buffer
---

# List.Buffer


## Description

Buffert een lijst.


## Syntax

```powerquery
List.Buffer(
    list as list
) as list
```


## Details

Buffert de lijst <code>list</code> in het geheugen. Het resultaat van deze aanroep is een stabiele lijst.


## Examples

### Example #1 
Een stabiele kopie maken van de lijst \{1..10}.
```powerquery
List.Buffer({1..10})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
```




## Category
List.Selection
