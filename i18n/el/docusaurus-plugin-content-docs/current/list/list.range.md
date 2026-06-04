---
title: List.Range
---

# List.Range


Επιστρέφει ένα υποσύνολο της λίστας αρχίζοντας από μια απόκλιση.


## Syntax

```powerquery
List.Range(
    list as list,
    offset as number,
    optional count as number
) as list
```


## Remarks

Επιστρέφει ένα υποσύνολο του `list` που αρχίζει στο `offset`. Μια προαιρετική παράμετρος, `count`, ορίζει τον μέγιστο αριθμό στοιχείων στο υποσύνολο.


## Examples

### Example #1
Βρείτε το υποσύνολο που αρχίζει στην απόκλιση 6 της λίστας αριθμών 1 έως 10.
```powerquery
List.Range({1..10}, 6)
```

Result: 
```powerquery
{7, 8, 9, 10}
```


### Example #2
Βρείτε το υποσύνολο με μήκος 2 από την απόκλιση 6, από τη λίστα αριθμών 1 έως 10.
```powerquery
List.Range({1..10}, 6, 2)
```

Result: 
```powerquery
{7, 8}
```




## Category
List.Selection
