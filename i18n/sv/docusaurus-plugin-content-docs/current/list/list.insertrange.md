---
title: List.InsertRange
---

# List.InsertRange


Infogar värden i en lista vid angivet index.


## Syntax

```powerquery
List.InsertRange(
    list as list,
    index as number,
    values as list
) as list
```


## Remarks

Returnerar en ny lista som genereras genom att värdena i `values` infogas i `list` vid `index`. Den första positionen i listan är vid index 0.

-   `list`: Mållistan där värdena ska infogas.
-   `index`: Indexet för mållistan (`list`) där värdena ska infogas. Den första positionen i listan är vid index 0.
-   `values`: Listan med värden som ska infogas i `list`.


## Examples

### Example #1
Infoga listan (\{3, 4\}) i mållistan (\{1, 2, 5\}) vid index 2.
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
Infoga en lista med en kapslad lista (\{1, \{1.1, 1.2\}\}) i en mållista (\{2, 3, 4\}) vid index 0.
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
