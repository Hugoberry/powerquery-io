---
title: List.Range
---

# List.Range


## Description

Επιστρέφει ένα υποσύνολο της λίστας αρχίζοντας από μια απόκλιση.


## Syntax

```powerquery
List.Range(
    list as list,
    offset as number,
    optional count as number
) as list
```


## Details

Επιστρέφει ένα υποσύνολο της λίστας αρχίζοντας από την απόκλιση <code>list</code>. Η προαιρετική παράμετρος <code>offset</code> καθορίζει το μέγιστο αριθμό στοιχείων στο υποσύνολο.


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
