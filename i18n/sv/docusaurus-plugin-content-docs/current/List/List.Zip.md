---
title: List.Zip
---

# List.Zip


## Description

Returnerar en lista med listor genom att kombinera objekt på samma plats i flera listor.


## Syntax

```powerquery
List.Zip(
    lists as list
) as list
```


## Details

Tar en lista med listor, <code>lists</code> och returnerar en lista med listor som kombinerar objekt på samma plats.


## Examples

### Example #1 
Zippar de två enkla listorna \{1, 2} och \{3, 4}.
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
Zippar de två enkla listorna med olika längd \{1, 2} och \{3}.
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
