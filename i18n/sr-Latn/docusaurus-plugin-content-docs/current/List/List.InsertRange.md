---
title: List.InsertRange
---

# List.InsertRange


## Description

Umeće vrednosti u listu kod datog indeksa.


## Syntax

```powerquery
List.InsertRange(
    list as list,
    index as number,
    values as list
) as list
```


## Details

Vraća novu listu koja se dobija umetanjem vrednosti iz <code>values</code> u <code>list</code> kod <code>index</code>. Prvi položaj na listi je kod indeksa 0.      <ul>        <li><code>list</code>: Ciljna lista u koju se umeću vrednosti.</li>        <li><code>index</code>: Indeks ciljne liste (<code>list</code>) u koju se umeću vrednosti. Prvi položaj na listi je kod indeksa 0.</li>        <li><code>values</code>: Lista vrednosti koje se umeću u <code>list</code>.</li>      </ul>


## Examples

### Example #1 
Umeće listu (\{3, 4}) u ciljnu listu (\{1, 2, 5}) kod indeksa 2.
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
Umeće listu sa ugnežđenom listom (\{1, \{1.1, 1.2}}) u ciljnu listu (\{2, 3, 4}) kod indeksa 0.
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
