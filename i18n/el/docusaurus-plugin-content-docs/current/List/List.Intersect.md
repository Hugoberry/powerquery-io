---
title: List.Intersect
---

# List.Intersect


## Description

Επιστρέφει την τομή των τιμών λίστας που βρέθηκαν στην είσοδο.


## Syntax

```powerquery
List.Intersect(
    lists as list,
    optional equationCriteria as any
) as list
```


## Details

Επιστρέφει την τομή των τιμών λίστας που βρέθηκαν στη λίστα εισόδου <code>lists</code>. Μπορεί να καθοριστεί μια προαιρετική παράμετρος <code>equationCriteria</code>.


## Examples

### Example #1 
Βρείτε την τομή των λιστών \{1..5}, \{2..6}, \{3..7}.
```powerquery
List.Intersect({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Set operations
