---
title: Number.Sqrt
---

# Number.Sqrt


Επιστρέφει την τετραγωνική ρίζα του αριθμού.


## Syntax

```powerquery
Number.Sqrt(
    number as number
) as number
```


## Remarks

Επιστρέφει την τετραγωνική ρίζα του `number`. Εάν το `number` είναι null, η `Number.Sqrt` επιστρέφει την τιμή null. Εάν είναι αρνητική τιμή, επιστρέφεται η `Number.NaN` (Δεν είναι αριθμός).


## Examples

### Example #1
Βρείτε την τετραγωνική ρίζα του 625.
```powerquery
Number.Sqrt(625)
```

Result: 
```powerquery
25
```


### Example #2
Βρείτε την τετραγωνική ρίζα του 85.
```powerquery
Number.Sqrt(85)
```

Result: 
```powerquery
9.2195444572928871
```




## Category
Number.Operations
