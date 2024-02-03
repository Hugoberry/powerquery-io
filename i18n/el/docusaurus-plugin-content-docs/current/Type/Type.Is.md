---
title: Type.Is
---

# Type.Is


## Description

Καθορίζει αν μια τιμή του πρώτου τύπου είναι πάντα συμβατή με τον δεύτερο τύπο.


## Syntax

```powerquery
Type.Is(
    type1 as type,
    type2 as type
) as logical
```


## Details

Καθορίζει αν μια τιμή του<code>type1</code> είναι πάντα συμβατή με <code>type2</code>.


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
