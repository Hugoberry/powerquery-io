---
title: List.Range
---

# List.Range


## Description

Gibt eine Teilmenge der Liste ab einem Offset zurück.


## Syntax

```powerquery
List.Range(
    list as list,
    offset as number,
    optional count as number
) as list
```


## Details

Gibt eine Teilmenge der Liste ab dem Offset "<code>list</code>" zurück. Die maximale Anzahl von Elementen in der Teilmenge kann mithilfe eines optionalen Parameters (<code>offset</code>) festgelegt werden.


## Examples

### Example #1 
Ermittelt die Teilmenge ab dem Offset 6 in der Zahlenliste von 1 bis 10.
```powerquery
List.Range({1..10}, 6)
```

Result: 
```powerquery
{7, 8, 9, 10}
```


### Example #2 
Ermittelt die Teilmenge mit der Länge 2 ab dem Offset 6 in der Zahlenliste von 1 bis 10.
```powerquery
List.Range({1..10}, 6, 2)
```

Result: 
```powerquery
{7, 8}
```




## Category
List.Selection
