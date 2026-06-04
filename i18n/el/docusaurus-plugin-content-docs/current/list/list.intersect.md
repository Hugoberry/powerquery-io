---
title: List.Intersect
---

# List.Intersect


Επιστρέφει την τομή των τιμών λίστας που βρέθηκαν στην είσοδο.


## Syntax

```powerquery
List.Intersect(
    lists as list,
    optional equationCriteria as any
) as list
```


## Remarks

Επιστρέφει την τομή των τιμών λίστας που βρέθηκαν στη λίστα εισόδου `lists`. Μπορεί να καθοριστεί μια προαιρετική παράμετρος `equationCriteria`.


## Examples

### Example #1
Βρείτε την τομή των λιστών \{1..5\}, \{2..6\}, \{3..7\}.
```powerquery
List.Intersect({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Set operations
