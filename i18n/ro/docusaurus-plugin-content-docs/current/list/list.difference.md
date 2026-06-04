---
title: List.Difference
---

# List.Difference


Returnează diferenţa dintre cele două liste date.


## Syntax

```powerquery
List.Difference(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Remarks

Returnează elementele din lista `list1` care nu apar în lista `list2`. Sunt acceptate valori duplicat. Poate fi specificată o valoare opțională criteriu de ecuație, `equationCriteria`, pentru a controla testarea egalității.


## Examples

### Example #1
Găsiți elementele din lista \{1, 2, 3, 4, 5\} care nu apar în \{4, 5, 3\}.
```powerquery
List.Difference({1, 2, 3, 4, 5}, {4, 5, 3})
```

Result: 
```powerquery
{1, 2}
```


### Example #2
Găsiţi elementele din lista \{1, 2\} care nu apar în \{1, 2, 3\}.
```powerquery
List.Difference({1, 2}, {1, 2, 3})
```

Result: 
```powerquery
{}
```




## Category
List.Set operations
