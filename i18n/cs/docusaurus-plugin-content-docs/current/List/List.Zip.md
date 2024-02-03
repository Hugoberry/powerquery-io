---
title: List.Zip
---

# List.Zip


## Description

Vrátí seznam seznamů kombinací položek na stejné pozici ve více seznamech.


## Syntax

```powerquery
List.Zip(
    lists as list
) as list
```


## Details

Vezme seznam seznamů <code>lists</code> a vrátí seznam seznamů kombinující položky na stejné pozici.


## Examples

### Example #1 
Zazipuje dva jednoduché seznamy \{1, 2} a \{3, 4}.
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
Zazipuje dva jednoduché seznamy o různých délkách \{1, 2} a \{3}.
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
