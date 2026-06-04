---
title: Type.Is
---

# Type.Is


Καθορίζει αν μια τιμή του πρώτου τύπου είναι πάντα συμβατή με τον δεύτερο τύπο.


## Syntax

```powerquery
Type.Is(
    type1 as type,
    type2 as type
) as logical
```


## Remarks

Προσδιορίζει αν μια τιμή `type1` είναι πάντα συμβατή με `type2`. Η τιμή της παραμέτρου `type2` πρέπει να είναι στοιχειώδης (ή στοιχειώδης) τιμή τύπου που επιδέχεται τιμές null. Διαφορετικά, η συμπεριφορά αυτής της συνάρτησης δεν έχει οριστεί και δεν θα πρέπει να είναι ενεργοποιημένη.


## Examples

### Example #1
Καθορίστε αν μια τιμή του αριθμού τύπου μπορεί πάντα να αντιμετωπιστεί ως τύπος οποιασδήποτε.
```powerquery
Type.Is(type number, type any)
```

Result: 
```powerquery
true
```


### Example #2
Καθορίστε αν μια τιμή τύπου μπορεί να θεωρηθεί πάντα ως αριθμός τύπου.
```powerquery
Type.Is(type any, type number)
```

Result: 
```powerquery
false
```




## Category
Type
