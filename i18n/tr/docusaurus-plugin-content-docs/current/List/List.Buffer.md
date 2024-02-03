---
title: List.Buffer
---

# List.Buffer


## Description

Bir listeyi arabelleğe alır.


## Syntax

```powerquery
List.Buffer(
    list as list
) as list
```


## Details

<code>list</code> listesini arabelleğe alır. Bu çağrının sonucu kararlı bir listedir.


## Examples

### Example #1 
\{1..10} listesinin kararlı bir kopyasını oluşturur.
```powerquery
List.Buffer({1..10})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
```




## Category
List.Selection
