---
title: List.RemoveFirstN
---

# List.RemoveFirstN


## Description

Returnează o listă care ignoră numărul specificat de elemente la începutul listei.


## Syntax

```powerquery
List.RemoveFirstN(
    list as list,
    optional countOrCondition as any
) as list
```


## Details

Returnează o listă care elimină primul element din lista <code>list</code>. Dacă lista <code>list</code> este goală, se returnează o listă goală.Această funcție preia un parametru opțional, <code>countOrCondition</code>, pentru a accepta eliminarea mai multor valori, așa cum se arată mai jos. <ul> <li>Dacă se specifică un număr, se elimină cel mult numărul de elemente respectiv. </li> <li>Dacă se specifică o condiție, lista returnată începe cu primul element din <code>list</code> care îndeplinește criteriile. Odată ce un element nu îndeplinește condiția, nu mai sunt luate în considerare elementele ulterioare. </li> <li>Dacă acest parametru este nul, este aplicat comportamentul implicit. </li> </ul>


## Examples

### Example #1 
Creaţi o listă de la \{1, 2, 3, 4, 5} fără primele 3 numere.
```powerquery
List.RemoveFirstN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2 
Creaţi o listă de la \{5, 4, 2, 6, 1} care începe cu un număr mai mic decât 3.
```powerquery
List.RemoveFirstN({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Transformation functions
