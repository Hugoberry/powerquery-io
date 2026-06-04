---
title: List.Transform
---

# List.Transform


Επιστρέφει μια νέα λίστα με τις τιμές που υπολογίζονται από αυτήν τη λίστα.


## Syntax

```powerquery
List.Transform(
    list as list,
    transform as function
) as list
```


## Remarks

Επιστρέφει μια νέα λίστα τιμών εφαρμόζοντας τη συνάρτηση μετασχηματισμού `transform` στη λίστα `list`.


## Examples

### Example #1
Προσθέστε 1 σε κάθε τιμή της λίστας \{1, 2\}.
```powerquery
List.Transform({1, 2}, each _ + 1)
```

Result: 
```powerquery
{2, 3}
```




## Category
List.Transformation functions
