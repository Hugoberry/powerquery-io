---
title: List.RemoveLastN
---

# List.RemoveLastN


## Description

Returnează o listă care elimină numărul specificat de elemente de la sfârşitul listei.


## Syntax

```powerquery
List.RemoveLastN(
    list as list,
    optional countOrCondition as any
) as list
```


## Details

Returnează o listă care elimină ultimele <code>countOrCondition</code> elemente de la sfârşitul listei <code>list</code>. Dacă <code>list</code> are mai puţin de <code>countOrCondition</code> elemente, se returnează o listă necompletată. <ul> <li>Dacă se specifică un număr, sunt eliminate maximum numărul de elemente respectiv. </li> <li>Dacă se specifică o condiţie, lista returnată se termină cu primul element de la final din <code>list</code> care îndeplineşte criteriile. Odată ce un element nu îndeplineşte condiţia, nu mai sunt luate în considerare elementele ulterioare. </li> <li>Dacă acest parametru are valoarea null, numai un singur element este eliminat. </li> </ul>


## Examples

### Example #1 
Creaţi o listă de la \{1, 2, 3, 4, 5} fără ultimele 3 numere.
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
Creaţi o listă de la \{5, 4, 2, 6, 4} care se termină cu un număr mai mic decât 3.
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
