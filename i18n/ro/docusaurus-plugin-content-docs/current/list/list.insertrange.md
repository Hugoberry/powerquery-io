---
title: List.InsertRange
---

# List.InsertRange


Inserează valori într-o listă la indexul dat.


## Syntax

```powerquery
List.InsertRange(
    list as list,
    index as number,
    values as list
) as list
```


## Remarks

Returnează o nouă listă produsă prin inserarea valorilor din `values` în `list` la `index`. Prima poziţie din listă este la indexul 0.

-   `list`: Lista ţintă în care urmează să fie inserate valorile.
-   `index`: Indexul listei ţintă (`list`) în care urmează să fie inserate valorile. Prima poziţie din listă este la indexul 0.
-   `values`: Lista de valori care urmează să fie inserate în `list`.


## Examples

### Example #1
Inseraţi lista (\{3, 4\}) în lista ţintă (\{1, 2, 5\}) la indexul 2.
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
Inseraţi o listă cu o listă imbricată (\{1, \{1,1, 1,2\}\}) într-o listă ţintă (\{2, 3, 4\}) la indexul 0.
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
