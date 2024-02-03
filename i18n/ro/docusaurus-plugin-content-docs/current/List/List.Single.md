---
title: List.Single
---

# List.Single


## Description

Returnează singurul element din listă pentru o listă de lungimea unu; în caz contrar, afişează o excepţie.


## Syntax

```powerquery
List.Single(
    list as list
) as any
```


## Details

Dacă există doar un element în lista <code>list</code>, returnează acel element.    Dacă există mai multe elemente sau lista este goală, funcția generează o excepție.


## Examples

### Example #1 
Aflaţi singura valoare din lista \{1}.
```powerquery
List.Single({1})
```

Result: 
```powerquery
1
```


### Example #2 
Aflaţi singura valoare din lista \{1, 2, 3}.
```powerquery
List.Single({1, 2, 3})
```

Result: 
```powerquery
[Expression.Error] There were too many elements in the enumeration to complete the operation.
```




## Category
List.Selection
