---
title: List.InsertRange
---

# List.InsertRange


Insère des valeurs dans une liste à l&#39;index spécifié.


## Syntax

```powerquery
List.InsertRange(
    list as list,
    index as number,
    values as list
) as list
```


## Remarks

Retourne une nouvelle liste générée par l'insertion de valeurs dans <code>values</code> dans <code>list</code> à <code>index</code>. La première la position dans la liste est à l'index 0.      <ul>        <li><code>list</code> : liste cible où les valeurs doivent être insérées.</li>        <li><code>index</code> : index de la liste cible (<code>list</code>) où les valeurs doivent être insérées. La première la position dans la liste est à l'index 0.</li>        <li><code>values</code> : liste des valeurs qui doivent être insérées dans <code>list</code>.</li>      </ul>


## Examples

### Example #1 
Insère la liste (\{3, 4}) dans la liste cible (\{1, 2, 5}) à l&#39;index 2.
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
Insère une liste avec une liste imbriquée (\{1, \{1.1, 1.2}}) dans une liste cible (\{2, 3, 4}) à l&#39;index 0.
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
