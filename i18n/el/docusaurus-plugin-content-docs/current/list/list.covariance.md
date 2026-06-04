---
title: List.Covariance
---

# List.Covariance


Επιστρέφει τη συνδιακύμανση μεταξύ των δύο λιστών με αριθμούς.


## Syntax

```powerquery
List.Covariance(
    numberList1 as list,
    numberList2 as list
) as number
```


## Remarks

Επιστρέφει τη συνδιακύμανση μεταξύ των δύο λιστών `numberList1` και `numberList2`. Οι λίστες `numberList1` και `numberList2` πρέπει να περιέχουν τον ίδιο αριθμό τιμών `number`.


## Examples

### Example #1
Υπολογίζει τη συνδιακύμανση μεταξύ δύο λιστών.
```powerquery
List.Covariance({1, 2, 3}, {1, 2, 3})
```

Result: 
```powerquery
0.66666666666666607
```




## Category
List.Numerics
