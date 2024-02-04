---
title: List.Select
---

# List.Select


## Description

Gibt eine Liste mit Werten zurück, die die Bedingung erfüllen.


## Syntax

```powerquery
List.Select(
    list as list,
    selection as function
) as list
```


## Details

Gibt eine Liste mit Werten aus der Liste "<code>list</code>" zurück, die die Auswahlbedingung "<code>selection</code>" erfüllen.


## Examples

### Example #1 
Ermittelt die Werte in der Liste &#34;\{1, -3, 4, 9, -2}&#34;, die größer null sind.
```powerquery
List.Select({1, -3, 4, 9, -2}, each _ > 0)
```

Result: 
```powerquery
{1, 4, 9}
```




## Category
List.Selection
