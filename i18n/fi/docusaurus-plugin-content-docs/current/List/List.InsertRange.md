---
title: List.InsertRange
---

# List.InsertRange


## Description

Lisää arvot luetteloon annettuun indeksiin.


## Syntax

```powerquery
List.InsertRange(
    list as list,
    index as number,
    values as list
) as list
```


## Details

Palauttaa uuden luettelon, joka on tuloksena kohteen <code>values</code> arvojen lisäämisestä kohteen <code>list</code> kohtaan <code>index</code>. Luettelon ensimmäinen sijainti on indeksissä 0.      <ul>        <li><code>list</code>: kohdeluettelo, johon arvot lisätään.</li>        <li><code>index</code>: kohdeluettelon (<code>list</code>) indeksi, johon arvot lisätään. Luettelon ensimmäinen sijainti on indeksissä 0.</li>        <li><code>values</code>: luettelo arvoja, jotka lisätään kohteeseen <code>list</code>.</li>      </ul>


## Examples

### Example #1 
Lisää luettelon (\{3, 4}) kohdeluetteloon (\{1, 2, 5}) indeksissä 2.
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
Lisää luettelon, jolla on sisäkkäinen luettelo (\{1, \{1.1, 1.2}}), kohdeluetteloon (\{2, 3, 4}) indeksissä 0.
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
