---
title: Number.Combinations
---

# Number.Combinations


Επιστρέφει τον αριθμό των μοναδικών συνδυασμών.


## Syntax

```powerquery
Number.Combinations(
    setSize as number,
    combinationSize as number
) as number
```


## Remarks

Επιστρέφει τον αριθμό των μοναδικών συνδυασμών από μια λίστα στοιχείων `setSize` με καθορισμένο μέγεθος συνδυασμού `combinationSize`.

-   `setSize`: Ο αριθμός των στοιχείων στη λίστα.
-   `combinationSize`: Ο αριθμός των στοιχείων σε κάθε συνδυασμό.


## Examples

### Example #1
Βρείτε τον αριθμό των συνδυασμών από ένα σύνολο 5 στοιχείων όπου κάθε συνδυασμός είναι μια ομάδα των 3.
```powerquery
Number.Combinations(5, 3)
```

Result: 
```powerquery
10
```




## Category
Number.Operations
