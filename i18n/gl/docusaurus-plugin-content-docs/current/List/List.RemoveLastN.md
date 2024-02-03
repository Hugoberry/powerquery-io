---
title: List.RemoveLastN
---

# List.RemoveLastN


## Description

Devolve unha lista que elimina o número de elementos especificado do final da lista.


## Syntax

```powerquery
List.RemoveLastN(
    list as list,
    optional countOrCondition as any
) as list
```


## Details

Devolve unha lista que elimina os últimos <code>countOrCondition</code> elementos do final da lista <code>list</code>. Se <code>list</code> ten menos de <code>countOrCondition</code> elementos, devólvese unha lista baleira. <ul> <li>Se se especifica un número, eliminaranse os elementos ata chegar a ese número. </li> <li>Se se especifica unha condición, a lista devolta termina co primeiro elemento da parte inferior en <code>list</code> que cumpre cos criterios. Cando un elemento non cumpre a condición, non se teñen en conta máis elementos. </li> <li>Se este parámetro é nulo, só se elimina un elemento. </li> </ul>


## Examples

### Example #1 
Crea unha lista a partir de \{1, 2, 3, 4, 5} sen os 3 últimos números.
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
Crea unha lista de \{5, 4, 2, 6, 4} que termina cun número menor que 3.
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
