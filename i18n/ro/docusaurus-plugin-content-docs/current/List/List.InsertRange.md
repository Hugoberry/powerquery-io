---
title: List.InsertRange
---

# List.InsertRange


## Description

Inserează valori într-o listă la indexul dat.


## Syntax

```powerquery
List.InsertRange(
    list as list,
    index as number,
    values as list
) as list
```


## Details

Returnează o nouă listă produsă prin inserarea valorilor din <code>values</code> în <code>list</code> la <code>index</code>. Prima poziţie din listă este la indexul 0.      <ul>        <li><code>list</code>: Lista ţintă în care urmează să fie inserate valorile.</li>        <li><code>index</code>: Indexul listei ţintă (<code>list</code>) în care urmează să fie inserate valorile. Prima poziţie din listă este la indexul 0.</li>        <li><code>values</code>: Lista de valori care urmează să fie inserate în <code>list</code>.</li>      </ul>


## Examples

### Example #1 
Inseraţi lista (\{3, 4}) în lista ţintă (\{1, 2, 5}) la indexul 2.
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
Inseraţi o listă cu o listă imbricată (\{1, \{1,1, 1,2}}) într-o listă ţintă (\{2, 3, 4}) la indexul 0.
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
