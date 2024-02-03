---
title: List.Skip
---

# List.Skip


## Description

Vrátí seznam s vynechaným určitým počtem prvků na začátku seznamu.


## Syntax

```powerquery
List.Skip(
    list as list,
    optional countOrCondition as any
) as list
```


## Details

Vrátí seznam, který neobsahuje první prvek seznamu <code>list</code>. Pokud je seznam <code>list</code> prázdný, je vrácen prázdný seznam.Tato funkce přebírá volitelný parametr <code>countOrCondition</code>, jehož pomocí podporuje přeskočení více hodnot, viz níže. <ul> <li>Pokud je zadáno číslo, přeskočí až tolik položek, kolik je určeno tímto číslem. </li> <li>Pokud je zadána podmínka, vrácený seznam bude začínat prvním elementem seznamu <code>list</code>, který splňuje daná kritéria. Pokud jakákoliv položka podmínku nesplňuje, nejsou již další položky po této položce zpracovány. </li> <li>Pokud má parametr hodnotu null, použije se výchozí chování. </li> </ul>


## Examples

### Example #1 
Vytvoří ze seznamu \{1, 2, 3, 4, 5} seznam bez prvních tří čísel.
```powerquery
List.Skip({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2 
Vytvoří ze seznamu \{5, 4, 2, 6, 1} seznam, který začíná číslem menším než 3.
```powerquery
List.Skip({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Selection
