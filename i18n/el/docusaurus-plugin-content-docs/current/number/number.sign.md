---
title: Number.Sign
---

# Number.Sign


Επιστρέφει 1 εάν ο αριθμός είναι θετικός, -1 εάν ο αριθμός είναι αρνητικός και 0 εάν ο αριθμός είναι μηδέν.


## Syntax

```powerquery
Number.Sign(
    number as number
) as number
```


## Remarks

Επιστρέφει 1 εάν το `number` είναι θετικός αριθμός, -1 εάν είναι αρνητικός αριθμός και 0 εάν είναι μηδέν. Εάν το `number` είναι null, η `Number.Sign` επιστρέφει την τιμή null.


## Examples

### Example #1
Προσδιορίστε το πρόσημο του 182.
```powerquery
Number.Sign(182)
```

Result: 
```powerquery
1
```


### Example #2
Προσδιορίστε το πρόσημο του -182.
```powerquery
Number.Sign(-182)
```

Result: 
```powerquery
-1
```


### Example #3
Προσδιορίστε το πρόσημο του 0.
```powerquery
Number.Sign(0)
```

Result: 
```powerquery
0
```




## Category
Number.Operations
