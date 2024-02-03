---
title: List.InsertRange
---

# List.InsertRange


## Description

Insereix els valors en una llista a l&#39;índex donat.


## Syntax

```powerquery
List.InsertRange(
    list as list,
    index as number,
    values as list
) as list
```


## Details

Retorna una llista nova produïda amb la inserció de valors a <code>values</code> a <code>list</code> a <code>index</code>. La primera posició de la llista és a l'índex 0.      <ul>        <li><code>list</code>: la llista de destinació en què s'han d'inserir els valors.</li>        <li><code>index</code>: l'índex de la llista de destinació (<code>list</code>) en què s'insereixen els valors. La primera posició de la llista és a l'índex 0.</li>        <li><code>values</code>: la llista de valors que s'han d'inserir a <code>list</code>.</li>      </ul>


## Examples

### Example #1 
Insereix la llista (\{3, 4}) a la llista de destinació (\{1, 2, 5}) a l&#39;índex 2.
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
Insereix una llista amb una llista imbricada (\{1, \{1.1, 1.2}}) en una llista de destinació (\{2, 3, 4}) a l&#39;índex 0.
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
