---
title: List.RemoveLastN
---

# List.RemoveLastN


## Description

Vrátí seznam, ze kterého je odebrán určitý počet prvků na konci seznamu.


## Syntax

```powerquery
List.RemoveLastN(
    list as list,
    optional countOrCondition as any
) as list
```


## Details

Vrátí seznam, ze kterého je odebráno posledních <code>countOrCondition</code> určitý počet prvků na konci seznamu <code>list</code>. Pokud je seznam <code>list</code> obsahuje méně než <code>countOrCondition</code> prvků, je vrácen prázdný seznam. <ul> <li>Pokud je zadáno číslo, odebere až tolik položek, kolik je určeno tímto číslem. </li> <li>Pokud je zadána podmínka, vrácený seznam bude končit prvním prvek od konce seznamu <code>list</code>, který splňuje daná kritéria. Pokud jakákoliv položka podmínku nesplňuje, nejsou již další položky po této položce zpracovány. </li> <li>Pokud má parametr hodnotu null, bude vrácena pouze jedna položka. </li> </ul>


## Examples

### Example #1 
Vytvoří ze seznamu \{1, 2, 3, 4, 5} seznam bez posledních tří čísel.
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
Vytvoří ze seznamu \{5, 4, 2, 6, 4} seznam, který končí číslem menším než 3.
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
