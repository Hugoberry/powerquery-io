---
title: List.InsertRange
---

# List.InsertRange


Inserisce i valori in un elenco in corrispondenza dell'indice specificato.


## Syntax

```powerquery
List.InsertRange(
    list as list,
    index as number,
    values as list
) as list
```


## Remarks

Restituisce un nuovo elenco prodotto dall'inserimento dei valori di `values` in `list` in corrispondenza di `index`. La prima posizione dell'elenco è in corrispondenza dell'indice 0.

-   `list`: elenco di destinazione in cui devono essere inseriti i valori.
-   `index`: l'indice dell'elenco di destinazione (`list`) in cui devono essere inseriti i valori. La prima posizione dell'elenco è in corrispondenza dell'indice 0.
-   `values`: l'elenco dei valori che devono essere inseriti in `list`.


## Examples

### Example #1
Inserire l'elenco (\{3, 4\}) nell'elenco di destinazione (\{1, 2, 5\}) in corrispondenza dell'indice 2.
```powerquery
List.InsertRange({1, 2, 5}, 2, {3, 4})
```

Result: 
```powerquery
{
    1,
    2,
    3,
    4,
    5
}
```


### Example #2
Inserire un elenco con un elenco annidato (\{1, \{1.1, 1.2\}\}) in un elenco di destinazione (\{2, 3, 4\}) in corrispondenza dell'indice 0.
```powerquery
List.InsertRange({2, 3, 4}, 0, {1, {1.1, 1.2}})
```

Result: 
```powerquery
{
    1,
    {
        1.1,
        1.2
    },
    2,
    3,
    4
}
```




## Category
List.Selection
