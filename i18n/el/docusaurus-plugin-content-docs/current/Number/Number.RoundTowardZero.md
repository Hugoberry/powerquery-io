---
title: Number.RoundTowardZero
---

# Number.RoundTowardZero


## Description

Επιστρέφει το αποτέλεσμα της στρογγυλοποίησης θετικών αριθμών προς τα κάτω και αρνητικών αριθμών προς τα επάνω. Ο αριθμός των ψηφίων μπορεί να καθοριστεί.


## Syntax

```powerquery
Number.RoundTowardZero(
    number as number,
    optional digits as number
) as number
```


## Details

Επιστρέφει το αποτέλεσμα της στρογγυλοποίησης του <code>number</code> με βάση το πρόσημο του αριθμού. Αυτή η συνάρτηση στρογγυλοποιεί τους θετικούς αριθμούς προς τα κάτω και τους αρνητικούς αριθμούς προς τα επάνω.    Αν καθοριστεί η <code>digits</code>, ο αριθμός <code>number</code> στρογγυλοποιείται σε <code>digits</code> δεκαδικά ψηφία.  


## Examples

### Example #1 
Στρογγυλοποιήστε τον αριθμό -1,2 προς το μηδέν.
```powerquery
Number.RoundTowardZero(-1.2)
```

Result: 
```powerquery
-1
```


### Example #2 
Στρογγυλοποιήστε τον αριθμό 1,2 προς το μηδέν.
```powerquery
Number.RoundTowardZero(1.2)
```

Result: 
```powerquery
1
```


### Example #3 
Στρογγυλοποίηση του αριθμού -1,234 προς το μηδέν με δύο δεκαδικά ψηφία.
```powerquery
Number.RoundTowardZero(-1.234, 2)
```

Result: 
```powerquery
-1.23
```




## Category
Number.Rounding
