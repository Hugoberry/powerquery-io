---
title: List.Intersect
---

# List.Intersect


Returnează intersecţia valorilor pentru listă găsite în datele introduse.


## Syntax

```powerquery
List.Intersect(
    lists as list,
    optional equationCriteria as any
) as list
```


## Remarks

Returnează intersecția valorilor de listă găsite în lista de intrare `lists`. Se poate specifica un parametru opțional, `equationCriteria`.


## Examples

### Example #1
Găsiţi intersecţia listelor \{1..5\}, \{2..6\}, \{3..7\}.
```powerquery
List.Intersect({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Set operations
