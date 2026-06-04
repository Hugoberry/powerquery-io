---
title: List.Skip
---

# List.Skip


Returnează o listă care ignoră numărul specificat de elemente la începutul listei.


## Syntax

```powerquery
List.Skip(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

Returnează o listă care omite primul element din lista `list`. Dacă `list` este o listă goală, se returnează o listă goală. Această funcție preia un parametru opțional, `countOrCondition`, pentru a ajuta la omiterea mai multor valori, așa cum este listat mai jos.

-   Dacă este specificat un număr, sunt omise până la acel număr de elemente.
-   Dacă este specificată o condiție, toate elementele consecutive care se potrivesc la începutul `list` sunt omise.
-   Dacă acest parametru este nul, se observă comportamentul implicit.


## Examples

### Example #1
Creaţi o listă de la \{1, 2, 3, 4, 5\} fără primele 3 numere.
```powerquery
List.Skip({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2
Creaţi o listă de la \{5, 4, 2, 6, 1\} care începe cu un număr mai mic decât 3.
```powerquery
List.Skip({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Selection
