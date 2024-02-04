---
title: List.Buffer
---

# List.Buffer


## Description

Puffert eine Liste.


## Syntax

```powerquery
List.Buffer(
    list as list
) as list
```


## Details

Puffert die Liste "<code>list</code>" im Arbeitsspeicher. Das Ergebnis dieses Aufrufs ist eine stabile Liste.


## Examples

### Example #1 
Erstellt eine stabile Kopie der Liste &#34;\{1..10}&#34;.
```powerquery
List.Buffer({1..10})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
```




## Category
List.Selection
