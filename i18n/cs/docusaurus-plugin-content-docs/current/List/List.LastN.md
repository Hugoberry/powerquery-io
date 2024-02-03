---
title: List.LastN
---

# List.LastN


## Description

Vrátí poslední hodnotu v seznamu.  Volitelně lze určit, kolik hodnot se má vrátit, nebo kvalifikující podmínku.


## Syntax

```powerquery
List.LastN(
    list as list,
    optional countOrCondition as any
) as any
```


## Details

Vrátí poslední hodnotu v seznamu <code>list</code>. Pokud je seznam prázdný, vyvolá se výjimka. Tato funkce přebírá volitelný parametr <code>countOrCondition</code>, jehož pomocí podporuje shromažďování víc položek nebo filtrování položek. Hodnota <code>countOrCondition</code> se dá zadat třemi různými způsoby. <ul>  <li>Pokud je zadané číslo, vrátí sadu položek obsahující maximálně tolik položek, kolik určuje toto číslo. </li>  <li>Pokud je zadaná podmínka, vrátí všechny položky, které podmínku splňují, počínaje od konce seznamu. Pokud jakákoliv položka podmínku nesplňuje, už se další položky po této položce nezpracují. </li>  <li>Pokud má tento parametr hodnotu null, vrátí se poslední položka v seznamu.</li> </ul>


## Examples

### Example #1 
Vyhledá poslední hodnotu v seznamu \{3, 4, 5, -1, 7, 8, 2}.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, 1)
```

Result: 
```powerquery
{2}
```


### Example #2 
Vyhledá v seznamu \{3, 4, 5, -1, 7, 8, 2} poslední hodnoty, které jsou větší než 0.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{7, 8, 2}
```




## Category
List.Selection
