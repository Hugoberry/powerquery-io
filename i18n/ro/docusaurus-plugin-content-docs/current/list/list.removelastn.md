---
title: List.RemoveLastN
---

# List.RemoveLastN


Returnează o listă care elimină numărul specificat de elemente de la sfârşitul listei.


## Syntax

```powerquery
List.RemoveLastN(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

Returnează o listă care elimină ultimele `countOrCondition` elemente de la sfârșitul listei `list`. Dacă `list` are mai puțin de `countOrCondition` elemente, se returnează o listă goală.

-   Dacă este specificat un număr, sunt eliminate până la acel număr de elemente.
-   Dacă este specificată o condiție, toate elementele consecutive care se potrivesc la sfârșitul lui `list` sunt eliminate.
-   Dacă acest parametru este nul, se elimină doar un singur element.


## Examples

### Example #1
Creaţi o listă de la \{1, 2, 3, 4, 5\} fără ultimele 3 numere.
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2
Creaţi o listă de la \{5, 4, 2, 6, 4\} care se termină cu un număr mai mic decât 3.
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
