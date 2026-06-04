---
title: List.InsertRange
---

# List.InsertRange


Lisää arvot luetteloon annettuun indeksiin.


## Syntax

```powerquery
List.InsertRange(
    list as list,
    index as number,
    values as list
) as list
```


## Remarks

Palauttaa uuden luettelon, joka on tuloksena kohteen `values` arvojen lisäämisestä kohteen `list` kohtaan `index`. Luettelon ensimmäinen sijainti on indeksissä 0.

-   `list`: kohdeluettelo, johon arvot lisätään.
-   `index`: kohdeluettelon (`list`) indeksi, johon arvot lisätään. Luettelon ensimmäinen sijainti on indeksissä 0.
-   `values`: luettelo arvoja, jotka lisätään kohteeseen `list`.


## Examples

### Example #1
Lisää luettelon (\{3, 4\}) kohdeluetteloon (\{1, 2, 5\}) indeksissä 2.
```powerquery
List.InsertRange({1, 2, 5}, 2, {3, 4})
```

Result: 
```powerquery
{
    1,
    2,
    3,
    4,
    5
}
```


### Example #2
Lisää luettelon, jolla on sisäkkäinen luettelo (\{1, \{1.1, 1.2\}\}), kohdeluetteloon (\{2, 3, 4\}) indeksissä 0.
```powerquery
List.InsertRange({2, 3, 4}, 0, {1, {1.1, 1.2}})
```

Result: 
```powerquery
{
    1,
    {
        1.1,
        1.2
    },
    2,
    3,
    4
}
```




## Category
List.Selection
