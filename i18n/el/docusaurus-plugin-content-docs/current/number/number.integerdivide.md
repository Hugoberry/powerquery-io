---
title: Number.IntegerDivide
---

# Number.IntegerDivide


Διαιρεί δύο αριθμούς και επιστρέφει το ακέραιο μέρος του αποτελέσματος.


## Syntax

```powerquery
Number.IntegerDivide(
    number1 as number,
    number2 as number,
    optional precision as Precision.Type
) as number
```


## Remarks

Επιστρέφει το ακέραιο μέρος του πηλίκου της διαίρεσης ενός αριθμού, `number1`, με έναν άλλο αριθμό, `number2`. Εάν το `number1` ή το `number2` είναι null, η `Number.IntegerDivide` επιστρέφει την τιμή null.

-   `number1`: Ο διαιρετέος.
-   `number2`: Ο διαιρέτης.


## Examples

### Example #1
Διαιρέστε το 6 με το 4.
```powerquery
Number.IntegerDivide(6, 4)
```

Result: 
```powerquery
1
```


### Example #2
Διαιρέστε το 8,3 με το 3.
```powerquery
Number.IntegerDivide(8.3, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
