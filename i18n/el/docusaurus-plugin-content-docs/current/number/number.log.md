---
title: Number.Log
---

# Number.Log


Επιστρέφει τον λογάριθμο του αριθμού με την καθορισμένη βάση (προεπιλογή e).


## Syntax

```powerquery
Number.Log(
    number as number,
    optional base as number
) as number
```


## Remarks

Επιστρέφει τον λογάριθμο ενός αριθμού, `number`, με την καθορισμένη βάση `base`. Αν δεν καθοριστεί `base`, η προεπιλεγμένη τιμή είναι "Number.E". Αν το `number` είναι null, το `Number.Log` επιστρέφει την τιμή null.


## Examples

### Example #1
Βρείτε το λογάριθμο με βάση το 10 του 2.
```powerquery
Number.Log(2, 10)
```

Result: 
```powerquery
0.3010299956639812
```


### Example #2
Βρείτε το λογάριθμο με βάση το e του 2.
```powerquery
Number.Log(2)
```

Result: 
```powerquery
0.69314718055994529
```




## Category
Number.Operations
