---
title: Number.Round
---

# Number.Round


## Description

Επιστρέφει το στρογγυλοποιημένο αριθμό. Ο αριθμός των ψηφίων και ο τρόπος στρογγυλοποίησης μπορούν να οριστούν.


## Syntax

```powerquery
Number.Round(
    number as number,
    optional digits as number,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Επιστρέφει το αποτέλεσμα της στρογγυλοποίησης <code>number</code> στον πλησιέστερο αριθμό. Αν <code>number</code> είναι null, το <code>Number.Round</code> επιστρέφει null.<br />      <br />      Από προεπιλογή, <code>number</code> στρογγυλοποιείται στον πλησιέστερο ακέραιο και οι δεσμοί σπάνε με στρογγυλοποίηση στον πλησιέστερο ζυγό αριθμό (χρησιμοποιώντας <code>RoundingMode.ToEven</code>, γνωστό και ως "στρογγυλοποίηση τραπεζίτη").<br />      <br />      Ωστόσο, αυτές οι προεπιλογές μπορούν να παρακαμφθούν μέσω των παρακάτω προαιρετικών παραμέτρων.      <ul>        <li><code>digits</code>: Προκαλεί <code>number</code> στρογγυλοποίηση στον καθορισμένο αριθμό δεκαδικών ψηφίων.</li>        <li><code>roundingMode</code>: Αντικαθιστά την προεπιλεγμένη συμπεριφορά ρήξης ισοπαλίας όταν <code>number</code> βρίσκεται στο μέσο μεταξύ δύο πιθανών στρογγυλεμένων τιμών      (ανατρέξτε στο <code> RoundingMode.Type</code> για πιθανές τιμές).</li>      </ul>


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
