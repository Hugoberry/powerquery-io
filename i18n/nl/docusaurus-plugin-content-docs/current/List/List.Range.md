---
title: List.Range
---

# List.Range


## Description

Retourneert een subset van de lijst, te beginnen bij een verschuiving.


## Syntax

```powerquery
List.Range(
    list as list,
    offset as number,
    optional count as number
) as list
```


## Details

Retourneert een subset van de lijst, te beginnen bij de verschuiving <code>list</code>. Een optionele parameter, <code>offset</code>, stelt het maximum aantal items voor de subset in.


## Examples

### Example #1 
De subset opzoeken, te beginnen bij verschuiving 6 van de lijst met getallen van 1 t/m 10.
```powerquery
List.Range({1..10}, 6)
```

Result: 
```powerquery
{7, 8, 9, 10}
```


### Example #2 
De subset met lengte 2 opzoeken vanaf verschuiving 6 van de lijst met getallen van 1 t/m 10.
```powerquery
List.Range({1..10}, 6, 2)
```

Result: 
```powerquery
{7, 8}
```




## Category
List.Selection
