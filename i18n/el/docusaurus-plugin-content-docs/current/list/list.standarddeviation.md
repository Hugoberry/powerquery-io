---
title: List.StandardDeviation
---

# List.StandardDeviation


Επιστρέφει μια εκτίμηση της τυπικής απόκλισης με βάση ένα δείγμα.


## Syntax

```powerquery
List.StandardDeviation(
    numbersList as list
) as number
```


## Remarks

Επιστρέφει μια εκτίμηση βάσει δείγματος της τυπικής απόκλισης των τιμών στη λίστα, `numbersList`. Αν το `numbersList` είναι λίστα αριθμών, επιστρέφεται ένας αριθμός. Εμφανίζεται σφάλμα σε μια κενή λίστα ή σε μια λίστα στοιχείων που δεν είναι τύπου `αριθμός`.


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
