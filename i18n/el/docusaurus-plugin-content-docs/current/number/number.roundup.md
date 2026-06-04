---
title: Number.RoundUp
---

# Number.RoundUp


Επιστρέφει τον επόμενο μεγαλύτερο αριθμό. Ο αριθμός των ψηφίων μπορεί να καθοριστεί.


## Syntax

```powerquery
Number.RoundUp(
    number as number,
    optional digits as number
) as number
```


## Remarks

Επιστρέφει το αποτέλεσμα της στρογγυλοποίησης `number` στον επόμενο υψηλότερο ακέραιο. Εάν το `number` είναι null, αυτή η συνάρτηση επιστρέφει null. Εάν το `digits` παρέχεται, το `number` στρογγυλοποιείται στον καθορισμένο αριθμό δεκαδικών ψηφίων.


## Examples

### Example #1
Στρογγυλοποιήστε το 1,234 προς τα επάνω σε ακέραιο αριθμό.
```powerquery
Number.RoundUp(1.234)
```

Result: 
```powerquery
2
```


### Example #2
Στρογγυλοποιήστε το 1,999 προς τα επάνω σε ακέραιο αριθμό.
```powerquery
Number.RoundUp(1.999)
```

Result: 
```powerquery
2
```


### Example #3
Στρογγυλοποίηση του 1,234 σε δύο δεκαδικά ψηφία.
```powerquery
Number.RoundUp(1.234, 2)
```

Result: 
```powerquery
1.24
```




## Category
Number.Rounding
