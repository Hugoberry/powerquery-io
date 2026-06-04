---
title: List.Skip
---

# List.Skip


Devolve unha lista que ignora o número de elementos especificado no inicio da lista.


## Syntax

```powerquery
List.Skip(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

Devolve unha lista que ignora o primeiro elemento da lista `list`. Se `list` é unha lista baleira devólvese unha lista baleira. Esta función toma un parámetro opcional, `countOrCondition`, para admitir omitir varios valores como se indica a continuación.

-   Se se especifica un número, omítense ata ese número de elementos.
-   Se se especifica unha condición, omítese calquera elemento coincidente consecutivo ao comezo de `list`.
-   Se este parámetro é nulo, obsérvase o comportamento predeterminado.


## Examples

### Example #1
Cree unha lista de \{1, 2, 3, 4, 5\} sen os 3 primeiros números.
```powerquery
List.Skip({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2
Cree unha lista de \{5, 4, 2, 6, 1\} que comece cun número menor que 3.
```powerquery
List.Skip({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Selection
