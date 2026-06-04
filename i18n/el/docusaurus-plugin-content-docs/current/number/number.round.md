---
title: Number.Round
---

# Number.Round


Επιστρέφει το στρογγυλοποιημένο αριθμό. Ο αριθμός των ψηφίων και ο τρόπος στρογγυλοποίησης μπορούν να οριστούν.


## Syntax

```powerquery
Number.Round(
    number as number,
    optional digits as number,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Επιστρέφει το αποτέλεσμα της στρογγυλοποίησης `number` στον πλησιέστερο αριθμό. Αν `number` είναι null, το `Number.Round` επιστρέφει null.  
  
Από προεπιλογή, `number` στρογγυλοποιείται στον πλησιέστερο ακέραιο και οι δεσμοί σπάνε με στρογγυλοποίηση στον πλησιέστερο ζυγό αριθμό (χρησιμοποιώντας `RoundingMode.ToEven`, γνωστό και ως "στρογγυλοποίηση τραπεζίτη").  
  
Ωστόσο, αυτές οι προεπιλογές μπορούν να παρακαμφθούν μέσω των παρακάτω προαιρετικών παραμέτρων.

-   `digits`: Προκαλεί `number` στρογγυλοποίηση στον καθορισμένο αριθμό δεκαδικών ψηφίων.
-   `roundingMode`: Αντικαθιστά την προεπιλεγμένη συμπεριφορά ρήξης ισοπαλίας όταν `number` βρίσκεται στο μέσο μεταξύ δύο πιθανών στρογγυλεμένων τιμών (ανατρέξτε στο `RoundingMode.Type` για πιθανές τιμές).


## Examples

### Example #1
Στρογγυλοποιεί τον αριθμό 1,234 στον πλησιέστερο ακέραιο.
```powerquery
Number.Round(1.234)
```

Result: 
```powerquery
1
```


### Example #2
Στρογγυλοποιεί τον αριθμό 1,56 στον πλησιέστερο ακέραιο.
```powerquery
Number.Round(1.56)
```

Result: 
```powerquery
2
```


### Example #3
Στρογγυλοποιεί τον αριθμό 1,2345 σε δύο δεκαδικά ψηφία.
```powerquery
Number.Round(1.2345, 2)
```

Result: 
```powerquery
1.23
```


### Example #4
Στρογγυλοποιεί τον αριθμό 1,2345 σε τρία δεκαδικά ψηφία (Στρογγυλοποίηση προς τα επάνω).
```powerquery
Number.Round(1.2345, 3, RoundingMode.Up)
```

Result: 
```powerquery
1.235
```


### Example #5
Στρογγυλοποιεί τον αριθμό 1,2345 σε τρία δεκαδικά ψηφία (Στρογγυλοποίηση προς τα κάτω).
```powerquery
Number.Round(1.2345, 3, RoundingMode.Down)
```

Result: 
```powerquery
1.234
```




## Category
Number.Rounding
