---
title: Number.IntegerDivide
---

# Number.IntegerDivide


## Description

Διαιρεί δύο αριθμούς και επιστρέφει το ακέραιο μέρος του αποτελέσματος.


## Syntax

```powerquery
Number.IntegerDivide(
    number1 as number,
    number2 as number,
    optional precision as Precision.Type
) as number
```


## Details

Επιστρέφει το ακέραιο μέρος του πηλίκου της διαίρεσης ενός αριθμού, <code>number1</code>, με έναν άλλο αριθμό, <code>number2</code>.    Εάν το <code>number1</code> ή το <code>number2</code> είναι null, η <code>Number.IntegerDivide</code> επιστρέφει την τιμή null.      <ul>        <li><code>number1</code>: Ο διαιρετέος.</li>        <li><code>number2</code>: Ο διαιρέτης.</li>      </ul>


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
