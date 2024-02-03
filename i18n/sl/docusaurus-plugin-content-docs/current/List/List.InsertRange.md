---
title: List.InsertRange
---

# List.InsertRange


## Description

Vstavi vrednosti v seznam z danim indeksom.


## Syntax

```powerquery
List.InsertRange(
    list as list,
    index as number,
    values as list
) as list
```


## Details

Vrne nov seznam, ustvarjen z vstavljanjem vrednosti na seznamu <code>values</code> v seznam <code>list</code> z indeksom <code>index</code>. Prvi položaj na seznamu ima indeks 0.      <ul>        <li><code>list</code>: ciljni seznam, v katerega bodo vstavljene vrednosti.</li>        <li><code>index</code>: indeks ciljnega seznama (<code>list</code>), v katerega bodo vstavljene vrednosti. Prvi položaj na seznamu ima indeks 0.</li>        <li><code>values</code>: seznam vrednosti, ki bodo vstavljene v seznam <code>list</code>.</li>      </ul>


## Examples

### Example #1 
Vstavite seznam (\{3, 4}) v ciljni seznam (\{1, 2, 5}) z indeksom 2.
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
Vstavite seznam z ugnezdenim seznamom (\{1, \{1.1, 1.2}}) v ciljni seznam (\{2, 3, 4}) z indeksom 0.
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
