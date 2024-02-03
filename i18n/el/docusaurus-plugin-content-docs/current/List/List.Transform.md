---
title: List.Transform
---

# List.Transform


## Description

Επιστρέφει μια νέα λίστα με τις τιμές που υπολογίζονται από αυτήν τη λίστα.


## Syntax

```powerquery
List.Transform(
    list as list,
    transform as function
) as list
```


## Details

Επιστρέφει μια νέα λίστα τιμών εφαρμόζοντας τη συνάρτηση μετασχηματισμού <code>transform</code> στη λίστα <code>list</code>.


## Examples

### Example #1 
Προσθέστε 1 σε κάθε τιμή της λίστας \{1, 2}.
```powerquery
List.Transform({1, 2}, each _ + 1)
```

Result: 
```powerquery
{2, 3}
```




## Category
List.Transformation functions
