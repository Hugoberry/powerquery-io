---
title: List.Intersect
---

# List.Intersect


## Description

Енгізбедегі тізім мәндерінің қиылысын қайтарады.


## Syntax

```powerquery
List.Intersect(
    lists as list,
    optional equationCriteria as any
) as list
```


## Details

<code>lists</code> кіріс тізіміндегі тізім мәндерінің қиылысын қайтарады. <code>equationCriteria</code> міндетті емес параметрін көрсетуге болады.


## Examples

### Example #1 
\{1..5}, \{2..6}, \{3..7} тізімдерінің қиылысын анықтау.
```powerquery
List.Intersect({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Set operations
