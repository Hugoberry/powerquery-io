---
title: List.Covariance
---

# List.Covariance


## Description

Επιστρέφει τη συνδιακύμανση μεταξύ των δύο λιστών με αριθμούς.


## Syntax

```powerquery
List.Covariance(
    numberList1 as list,
    numberList2 as list
) as number
```


## Details

Επιστρέφει τη συνδιακύμανση μεταξύ των δύο λιστών <code>numberList1</code> και <code>numberList2</code>. Οι λίστες <code>numberList1</code> και <code>numberList2</code> πρέπει να περιέχουν τον ίδιο αριθμό τιμών <code>number</code>.


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
