---
title: List.Reverse
---

# List.Reverse


Αντιστρέφει τη σειρά των τιμών στη λίστα.


## Syntax

```powerquery
List.Reverse(
    list as list
) as list
```


## Remarks

Επιστρέφει μια λίστα με τις τιμές της λίστας `list` σε αντίστροφη σειρά.


## Examples

### Example #1
Δημιουργήστε μια λίστα από τη λίστα \{1..10\} σε αντίστροφη σειρά.
```powerquery
List.Reverse({1..10})
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```




## Category
List.Transformation functions
