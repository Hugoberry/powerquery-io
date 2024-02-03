---
title: List.Distinct
---

# List.Distinct


## Description

Returnează o listă de valori cu duplicatele eliminate.


## Syntax

```powerquery
List.Distinct(
    list as list,
    optional equationCriteria as any
) as list
```


## Details

Returnează o listă ce conţine toate valorile din lista <code>list</code> cu duplicatele eliminate. Dacă lista este necompletată, rezultatul este o listă necompletată.


## Examples

### Example #1 
Eliminaţi duplicatele din lista \{1, 1, 2, 3, 3, 3}.
```powerquery
List.Distinct({1, 1, 2, 3, 3, 3})
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
List.Selection
