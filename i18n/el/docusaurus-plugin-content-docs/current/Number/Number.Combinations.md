---
title: Number.Combinations
---

# Number.Combinations


## Description

Επιστρέφει τον αριθμό των μοναδικών συνδυασμών.


## Syntax

```powerquery
Number.Combinations(
    setSize as number,
    combinationSize as number
) as number
```


## Details

Επιστρέφει τον αριθμό των μοναδικών συνδυασμών από μια λίστα στοιχείων <code>setSize</code> με καθορισμένο μέγεθος συνδυασμού <code>combinationSize</code>.<ul>    <li><code>setSize</code>: Ο αριθμός των στοιχείων στη λίστα.</li>    <li><code>combinationSize</code>: Ο αριθμός των στοιχείων σε κάθε συνδυασμό.</li></ul>


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
