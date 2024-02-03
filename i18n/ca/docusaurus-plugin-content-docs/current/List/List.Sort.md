---
title: List.Sort
---

# List.Sort


## Description

Ordena una llista de dades d&#39;acord amb els criteris especificats.


## Syntax

```powerquery
List.Sort(
    list as list,
    optional comparisonCriteria as any
) as list
```


## Details

Ordena una llista de dades, <code>list</code>, d’acord amb els criteris opcionals especificats.    Es pot especificar un paràmetre opcional, <code>comparisonCriteria</code>, com a criteri de comparació. Això pot adoptar els valors següents:    <ul>    <li> Per controlar l’ordre, el criteri de comparació pot ser un valor d’enumeració Order. (<code>Order.Descending</code>, <code>Order.Ascending</code>). </li>    <li> Per determinar la clau que s’utilitzarà per ordenar, es pot utilitzar una funció d’un argument. </li>    <li> Per seleccionar una clau i un ordre de control, el criteri de comparació pot ser una llista que contingui la clau i l’ordre (<code>\{each 1 / _, Order.Descending}</code>). </li>    <li> Per controlar la comparació per complet, es pot utilitzar una funció de dos arguments. Es passaran a la funció dos elements de la llista (dos elements qualssevol, en qualsevol ordre). La funció hauria de retornar un d’aquests valors:        <ul>            <li> <code>-1</code>: el primer element és inferior al segon.</li>            <li> <code>0</code>: els elements són iguals.</li>            <li> <code>1</code>: el primer element és superior al segon.</li>        </ul>        Value.Compare és un mètode que es pot utilitzar per delegar aquesta lògica. </li>    </ul>


## Examples

### Example #1 
Ordena la llista \{2, 3, 1}.
```powerquery
List.Sort({2, 3, 1})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2 
Ordena la llista \{2, 3, 1} en ordre descendent.
```powerquery
List.Sort({2, 3, 1}, Order.Descending)
```

Result: 
```powerquery
{3, 2, 1}
```


### Example #3 
Ordena la llista \{2, 3, 1} en ordre descendent amb el mètode Value.Compare.
```powerquery
List.Sort({2, 3, 1}, (x, y) => Value.Compare(1/x, 1/y))
```

Result: 
```powerquery
{3, 2, 1}
```




## Category
List.Ordering
