---
title: List.Zip
---

# List.Zip


Zwraca listę list, łącząc elementy znajdujące się w tym samym położeniu na wielu listach.


## Syntax

```powerquery
List.Zip(
    lists as list
) as list
```


## Remarks

Pobiera listę list, <code>lists</code>, i zwraca listę list łączącą elementy w tym samym położeniu.


## Examples

### Example #1 
Pakuje dwie proste listy \{1, 2} i \{3, 4}.
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
Pakuje dwie proste listy o różnej długości \{1, 2} i \{3}.
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
