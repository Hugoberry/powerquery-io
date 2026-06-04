---
title: Number.Permutations
---

# Number.Permutations


Επιστρέφει τον αριθμό των μεταθέσεων.


## Syntax

```powerquery
Number.Permutations(
    setSize as number,
    permutationSize as number
) as number
```


## Remarks

Επιστρέφει τον αριθμό των μεταθέσεων που μπορούν να δημιουργηθούν από έναν αριθμό στοιχείων `setSize`, με καθορισμένο μέγεθος μετάθεσης `permutationSize`.


## Examples

### Example #1
Βρείτε τον αριθμό των μεταθέσεων από ένα σύνολο 5 στοιχείων σε ομάδες των 3.
```powerquery
Number.Permutations(5, 3)
```

Result: 
```powerquery
60
```




## Category
Number.Operations
