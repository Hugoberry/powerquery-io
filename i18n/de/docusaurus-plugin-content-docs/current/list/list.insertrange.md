---
title: List.InsertRange
---

# List.InsertRange


Fügt Werte am angegebenen Index in eine Liste ein.


## Syntax

```powerquery
List.InsertRange(
    list as list,
    index as number,
    values as list
) as list
```


## Remarks

Gibt eine neue Liste zurück, die dadurch erzeugt wird, dass die Werte aus "`values`" bei "`index`" in "`list`" eingefügt werden. Die erste Position in der Liste befindet sich am Index 0.

-   `list`: Die Zielliste, in die die Werte eingefügt werden sollen.
-   `index`: Der Index der Zielliste (`list`), an dem die Werte eingefügt werden sollen. Die erste Position in der Liste befindet sich am Index 0.
-   `values`: Die Liste mit Werten, die in "`list`" eingefügt werden sollen.


## Examples

### Example #1
Fügt die Liste "\{3, 4\}" am Index 2 in die Zielliste "\{1, 2, 5\}" ein.
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
Fügt eine Liste mit einer geschachtelten Liste (\{1, \{1.1, 1.2\}\}) am Index 0 in eine Zielliste (\{2, 3, 4\}) ein.
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
