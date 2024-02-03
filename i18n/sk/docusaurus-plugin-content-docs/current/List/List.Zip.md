---
title: List.Zip
---

# List.Zip


## Description

Vráti zoznam zoznamov, pričom skombinuje položky s tou istou pozíciou do viacerých zoznamov.


## Syntax

```powerquery
List.Zip(
    lists as list
) as list
```


## Details

Zoberie zoznam zoznamov, <code>lists</code>, a vráti zoznam zoznamov, pričom skombinuje položky s tou istou pozíciou.


## Examples

### Example #1 
Skomprimuje dva jednoduché zoznamy \{1, 2} a \{3, 4}.
```powerquery
List.Zip({{1, 2}, {3, 4}})
```

Result: 
```powerquery
{
    {1, 3},
    {2, 4}
}
```


### Example #2 
Skomprimuje dva jednoduché zoznamy s rozličnými dĺžkami \{1, 2} a \{3}.
```powerquery
List.Zip({{1, 2}, {3}})
```

Result: 
```powerquery
{
    {1, 3},
    {2, null}
}
```




## Category
List.Transformation functions
