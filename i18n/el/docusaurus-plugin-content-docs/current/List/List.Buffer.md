---
title: List.Buffer
---

# List.Buffer


## Description

Αποθηκεύει μια λίστα στο buffer.


## Syntax

```powerquery
List.Buffer(
    list as list
) as list
```


## Details

Αποθηκεύει στο buffer τη λίστα <code>list</code> της μνήμης. Το αποτέλεσμα αυτής της κλήσης είναι μια σταθερή λίστα.


## Examples

### Example #1 
Δημιουργήστε ένα σταθερό αντίγραφο της λίστας \{1..10}.
```powerquery
List.Buffer({1..10})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
```




## Category
List.Selection
