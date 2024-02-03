---
title: List.Zip
---

# List.Zip


## Description

Vraća spisak listi tako što kombinuje stavke koje su na istom položaju na više listi.


## Syntax

```powerquery
List.Zip(
    lists as list
) as list
```


## Details

Uzima spisak listi <code>lists</code> i vraća spisak listi koji kombinuje stavke na istom položaju.


## Examples

### Example #1 
Zipuje dve jednostavne liste \{1, 2} i \{3, 4}.
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
Zipuje dve jednostavne liste različitih dužina \{1, 2} i \{3}.
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
