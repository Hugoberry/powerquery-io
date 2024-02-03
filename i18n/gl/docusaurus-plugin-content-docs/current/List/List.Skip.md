---
title: List.Skip
---

# List.Skip


## Description

Devolve unha lista que ignora o número de elementos especificado no inicio da lista.


## Syntax

```powerquery
List.Skip(
    list as list,
    optional countOrCondition as any
) as list
```


## Details

Devolve unha lista que ignora o primeiro elemento da lista <code>list</code>. Se <code>list</code> é unha lista baleira, devólvese unha lista baleira.Esta función acepta un parámetro opcional, <code>countOrCondition</code>, para permitir que se ignoren varios valores como se mostra a continuación. <ul> <li>Se se especifica un número, ignóranse os elementos ata chegar a ese número. </li> <li>Se se especifica unha condición, a lista devolta comeza co primeiro elemento de <code>list</code> que cumpre cos criterios. Cando un elemento non cumpre a condición, non se teñen en conta máis elementos. </li> <li>Se este parámetro é nulo, respéctase o comportamento predefinido. </li> </ul>


## Examples

### Example #1 
Cree unha lista de \{1, 2, 3, 4, 5} sen os 3 primeiros números.
```powerquery
List.Skip({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2 
Cree unha lista de \{5, 4, 2, 6, 1} que comece cun número menor que 3.
```powerquery
List.Skip({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Selection
