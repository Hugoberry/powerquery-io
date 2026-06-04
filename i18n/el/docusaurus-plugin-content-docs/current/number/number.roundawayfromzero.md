---
title: Number.RoundAwayFromZero
---

# Number.RoundAwayFromZero


Επιστρέφει το αποτέλεσμα της στρογγυλοποίησης θετικών αριθμών προς τα επάνω και αρνητικών αριθμών προς τα κάτω. Ο αριθμός των ψηφίων μπορεί να καθοριστεί.


## Syntax

```powerquery
Number.RoundAwayFromZero(
    number as number,
    optional digits as number
) as number
```


## Remarks

Επιστρέφει το αποτέλεσμα της στρογγυλοποίησης του `number` με βάση το πρόσημο του αριθμού. Αυτή η συνάρτηση στρογγυλοποιεί τους θετικούς αριθμούς προς τα επάνω και τους αρνητικούς αριθμούς προς τα κάτω. Αν καθοριστεί η `digits`, ο αριθμός `number` στρογγυλοποιείται σε `digits` δεκαδικά ψηφία.


## Examples

### Example #1
Στρογγυλοποιήστε τον αριθμό -1,2 μακριά από το μηδέν.
```powerquery
Number.RoundAwayFromZero(-1.2)
```

Result: 
```powerquery
-2
```


### Example #2
Στρογγυλοποιήστε τον αριθμό 1,2 μακριά από το μηδέν.
```powerquery
Number.RoundAwayFromZero(1.2)
```

Result: 
```powerquery
2
```


### Example #3
Στρογγυλοποίηση του αριθμού -1,234 σε δύο δεκαδικά ψηφία.
```powerquery
Number.RoundAwayFromZero(-1.234, 2)
```

Result: 
```powerquery
-1.24
```




## Category
Number.Rounding
