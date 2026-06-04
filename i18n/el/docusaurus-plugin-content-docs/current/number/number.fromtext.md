---
title: Number.FromText
---

# Number.FromText


Δημιουργεί αριθμούς από κοινές μορφές κειμένου ("15", "3.423,10", "5,0E-10").


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Remarks

Επιστρέφει μια τιμή `number` από τη δεδομένη τιμή κειμένου `text`.

-   `text`: Η αναπαράσταση κειμένου μιας αριθμητικής τιμής. Η αναπαράσταση πρέπει να είναι σε μια κοινή αριθμητική μορφή - "15", "3.423,10", "5,0E-10".
-   `culture`: Μια προαιρετική κουλτούρα που ελέγχει τον τρόπο ερμηνείας του `text` (για παράδειγμα, en-US).


## Examples

### Example #1
Λάβετε την αριθμητική τιμή του `"4"`.
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2
Λάβετε την αριθμητική τιμή του `"5.0e-10"`.
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting
