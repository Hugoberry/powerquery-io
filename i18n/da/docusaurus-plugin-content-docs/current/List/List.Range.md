---
title: List.Range
---

# List.Range


## Description

Returnerer et undersæt af listen med start ved en forskydning.


## Syntax

```powerquery
List.Range(
    list as list,
    offset as number,
    optional count as number
) as list
```


## Details

Returnerer et undersæt af listen med start ved forskydningen <code>list</code>. En valgfri parameter, <code>offset</code>, angiver det højeste antal elementer i undersættet.


## Examples

### Example #1 
Find undersættet med start ved forskydning 6 på listen over tallene 1-10.
```powerquery
List.Range({1..10}, 6)
```

Result: 
```powerquery
{7, 8, 9, 10}
```


### Example #2 
Find undersættet med længden 2 fra forskydning 6 på listen over tallene 1-10.
```powerquery
List.Range({1..10}, 6, 2)
```

Result: 
```powerquery
{7, 8}
```




## Category
List.Selection
