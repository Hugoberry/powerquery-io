---
title: List.StandardDeviation
---

# List.StandardDeviation


## Description

Επιστρέφει μια εκτίμηση της τυπικής απόκλισης με βάση ένα δείγμα.


## Syntax

```powerquery
List.StandardDeviation(
    numbersList as list
) as number
```


## Details

Επιστρέφει μια εκτίμηση <code>numbersList</code> της τυπικής απόκλισης των τιμών της λίστας με βάση ένα δείγμα.    Αν το <code>numbersList</code> είναι λίστα αριθμών, επιστρέφεται ένας αριθμός.    Σε μια κενή λίστα ή σε μια λίστα με στοιχεία που δεν είναι τύπου <code>number</code> παρουσιάζεται εξαίρεση.


## Examples

### Example #1 
Βρείτε την τυπική απόκλιση των αριθμών 1 έως 5.
```powerquery
List.StandardDeviation({1..5})
```

Result: 
```powerquery
1.5811388300841898
```




## Category
List.Averages
