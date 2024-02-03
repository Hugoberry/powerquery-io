---
title: List.Random
---

# List.Random


## Description

Returnează o listă de numere aleatorii.


## Syntax

```powerquery
List.Random(
    count as number,
    optional seed as number
) as list
```


## Details

Returnează o listă de numere aleatorii între 0 și 1, ținând cont de numărul de valori de generat și de o valoare inițială opțională.<ul>   <li><code>count</code>: numărul de valori aleatorii de generat.</li>   <li><code>seed</code>: <i>[opțional]</i> o valoare numerică utilizată pentru a iniția o valoare de pornire pentru generatorul de numere aleatorii. Dacă se omite, este generată o listă unică de numere aleatorii de fiecare dată când apelați funcția. Dacă specificați ca valoare inițială un număr, fiecare apel la funcție generează aceeași listă de numere aleatorii.</li></ul>


## Examples

### Example #1 
Creaţi o listă de 3 numere aleatorii.
```powerquery
List.Random(3)
```

Result: 
```powerquery
{0.992332, 0.132334, 0.023592}
```


### Example #2 
Creaţi o listă de 3 numere aleatorii, specificând valoarea de pornire.
```powerquery
List.Random(3, 2)
```

Result: 
```powerquery
{0.883002, 0.245344, 0.723212}
```




## Category
List.Generators
