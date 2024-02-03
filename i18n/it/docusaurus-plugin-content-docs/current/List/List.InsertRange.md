---
title: List.InsertRange
---

# List.InsertRange


## Description

Inserisce i valori in un elenco in corrispondenza dell&#39;indice specificato.


## Syntax

```powerquery
List.InsertRange(
    list as list,
    index as number,
    values as list
) as list
```


## Details

Restituisce un nuovo elenco prodotto dall'inserimento dei valori di <code>values</code> in <code>list</code> in corrispondenza di <code>index</code>. La prima posizione dell'elenco è in corrispondenza dell'indice 0.      <ul>        <li><code>list</code>: elenco di destinazione in cui devono essere inseriti i valori.</li>        <li><code>index</code>: l'indice dell'elenco di destinazione (<code>list</code>) in cui devono essere inseriti i valori. La prima posizione dell'elenco è in corrispondenza dell'indice 0.</li>        <li><code>values</code>: l'elenco dei valori che devono essere inseriti in <code>list</code>.</li>      </ul>


## Examples

### Example #1 
Inserire l&#39;elenco (\{3, 4}) nell&#39;elenco di destinazione (\{1, 2, 5}) in corrispondenza dell&#39;indice 2.
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
Inserire un elenco con un elenco annidato (\{1, \{1.1, 1.2}}) in un elenco di destinazione (\{2, 3, 4}) in corrispondenza dell&#39;indice 0.
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
