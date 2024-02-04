---
title: List.Reverse
---

# List.Reverse


## Description

Kehrt die Reihenfolge der Werte in der Liste um.


## Syntax

```powerquery
List.Reverse(
    list as list
) as list
```


## Details

Gibt eine Liste mit den Werten aus der Liste "<code>list</code>" in umgekehrter Reihenfolge zurück.


## Examples

### Example #1 
Erstellt auf der Grundlage von &#34;\{1..10}&#34; eine Liste in umgekehrter Reihenfolge.
```powerquery
List.Reverse({1..10})
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```




## Category
List.Transformation functions
