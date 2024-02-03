---
title: List.InsertRange
---

# List.InsertRange


## Description

Vloží hodnoty do zoznamu s daným indexom.


## Syntax

```powerquery
List.InsertRange(
    list as list,
    index as number,
    values as list
) as list
```


## Details

Vráti nový zoznam vytvorený vložením hodnôt <code>values</code> do zoznamu <code>list</code> s indexom <code>index</code>. Prvá pozícia v zozname má index 0.      <ul>        <li><code>list</code>: Cieľový zoznam, do ktorého sa majú vložiť hodnoty.</li>        <li><code>index</code>: Index cieľového zoznamu (<code>list</code>), do ktorého sa majú vložiť hodnoty. Prvá pozícia v zozname má index 0.</li>        <li><code>values</code>: Zoznam hodnôt, ktoré sa majú vložiť do zoznamu <code>list</code>.</li>      </ul>


## Examples

### Example #1 
Vložte zoznam (\{3, 4}) do cieľového zoznamu (\{1, 2, 5}) s indexom 2.
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
Vložte zoznam s vnoreným zoznamom (\{1, \{1.1, 1.2}}) do cieľového zoznamu (\{2, 3, 4}) s indexom 0.
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
