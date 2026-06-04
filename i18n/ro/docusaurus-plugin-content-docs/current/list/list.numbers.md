---
title: List.Numbers
---

# List.Numbers


Returnează o listă de numere dintr-o valoare iniţială, un număr şi o valoare opţională a incrementului.


## Syntax

```powerquery
List.Numbers(
    start as number,
    count as number,
    optional increment as number
) as list
```


## Remarks

Returnează o listă de numere dintr-o valoare inițială, un număr şi o valoare opțională a incrementului. Valoarea implicită a incrementului este 1.

-   `start`: valoarea inițială din listă.
-   `count`: numărul de valori de creat.
-   `increment`: *\[opțional\]* Valoarea cu care să creșteți. Dacă este omisă, valorile sunt crescute cu 1.


## Examples

### Example #1
Generaţi o listă de 10 numere consecutive începând cu 1.
```powerquery
List.Numbers(1, 10)
```

Result: 
```powerquery
{
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
}
```


### Example #2
Generaţi o listă de 10 numere începând cu 1, cu un increment de 2 pentru fiecare număr ulterior.
```powerquery
List.Numbers(1, 10, 2)
```

Result: 
```powerquery
{
    1,
    3,
    5,
    7,
    9,
    11,
    13,
    15,
    17,
    19
}
```




## Category
List.Generators
