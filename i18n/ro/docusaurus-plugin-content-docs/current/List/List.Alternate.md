---
title: List.Alternate
---

# List.Alternate


## Description

Returnează o listă comprimată cu toate elementele decalajului numerotate cu numere impare dintr-o listă.


## Syntax

```powerquery
List.Alternate(
    list as list,
    count as number,
    optional repeatInterval as number,
    optional offset as number
) as list
```


## Details

Returnează o listă comprimată cu toate elementele decalajului numerotate cu numere impare dintr-o listă. Alternează între preluarea şi ignorarea valorilor din lista <code>list</code> în funcţie de parametri.    <ul>    <li><code>count</code>: Specifică numărul de valori care sunt ignorate de fiecare dată.</li>    <li><code>repeatInterval</code>: Un interval de repetare opţional pentru a indica numărul de valori adăugate între valorile ignorate.</li>    <li><code>offset</code>: Un parametru de decalaj al opţiunilor pentru a începe ignorarea valorilor la decalajul iniţial.</li>    </ul>


## Examples

### Example #1 
Creaţi o listă de la \{1..10} care ignoră primul număr.
```powerquery
List.Alternate({1..10}, 1)
```

Result: 
```powerquery
{2, 3, 4, 5, 6, 7, 8, 9, 10}
```


### Example #2 
Creați o listă de la \{1..10} care ignoră fiecare al doilea număr.
```powerquery
List.Alternate({1..10}, 1, 1)
```

Result: 
```powerquery
{2, 4, 6, 8, 10}
```


### Example #3 
Creaţi o listă de la \{1..10} care începe de la 1 şi ignoră fiecare al doilea număr.
```powerquery
List.Alternate({1..10}, 1, 1, 1)
```

Result: 
```powerquery
{1, 3, 5, 7, 9}
```


### Example #4 
Creați o listă de la \{1..10} care începe de la 1, ignoră o valoare, păstrează două valori și așa mai departe.
```powerquery
List.Alternate({1..10}, 1, 2, 1)
```

Result: 
```powerquery
{1, 3, 4, 6, 7, 9, 10}
```




## Category
List.Selection
