---
title: Number.RoundDown
---

# Number.RoundDown


## Description

Επιστρέφει τον προηγούμενο μεγαλύτερο αριθμό. Ο αριθμός των ψηφίων μπορεί να καθοριστεί.


## Syntax

```powerquery
Number.RoundDown(
    number as number,
    optional digits as number
) as number
```


## Details

Επιστρέφει το αποτέλεσμα της στρογγυλοποίησης <code>number</code> προς τα κάτω στον προηγούμενο υψηλότερο ακέραιο.Αν το <code>number</code> είναι null, αυτή η συνάρτηση επιστρέφει null.    Αν το <code>digits</code> παρέχεται, το <code>number</code>στρογγυλοποιείται στον καθορισμένο αριθμό δεκαδικών ψηφίων.  


## Examples

### Example #1 
Στρογγυλοποιήστε το 1,234 προς τα κάτω σε ακέραιο αριθμό.
```powerquery
Number.RoundDown(1.234)
```

Result: 
```powerquery
1
```


### Example #2 
Στρογγυλοποιήστε το 1,999 προς τα κάτω σε ακέραιο αριθμό.
```powerquery
Number.RoundDown(1.999)
```

Result: 
```powerquery
1
```


### Example #3 
Στρογγυλοποίηση προς τα κάτω του 1,999 με δύο δεκαδικά ψηφία.
```powerquery
Number.RoundDown(1.999, 2)
```

Result: 
```powerquery
1.99
```




## Category
Number.Rounding
