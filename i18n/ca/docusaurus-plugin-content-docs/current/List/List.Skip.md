---
title: List.Skip
---

# List.Skip


## Description

Retorna una llista que omet el nombre especificat d&#39;elements al principi de la llista.


## Syntax

```powerquery
List.Skip(
    list as list,
    optional countOrCondition as any
) as list
```


## Details

Retorna una llista que omet el primer element de la llista <code>list</code>. Si <code>list</code> és una llista buida, es retorna una llista buida.Aquesta funció utilitza un paràmetre opcional, <code>countOrCondition</code>, per admetre l'omissió de diversos valors tal com s'indica a continuació. <ul> <li>Si s'especifica un nombre, s'omet el mateix nombre d'elements com a màxim. </li> <li>Si s'especifica una condició, la llista retornada comença amb el primer element de <code>list</code> que compleix els criteris. Quan un element no compleixi la condició, no es tindran en compte més elements. </li> <li>Si aquest paràmetre té el valor null, se segueix el comportament per defecte. </li> </ul>


## Examples

### Example #1 
Crea una llista a partir de \{1, 2, 3, 4, 5} sense els 3 primers nombres.
```powerquery
List.Skip({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2 
Crea una llista a partir de \{5, 4, 2, 6, 1} que comença amb un nombre més petit que 3.
```powerquery
List.Skip({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Selection
