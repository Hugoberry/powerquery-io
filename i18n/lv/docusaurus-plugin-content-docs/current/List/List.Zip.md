---
title: List.Zip
---

# List.Zip


## Description

Atgriež sarakstu sarakstu, apvienojot vienumus, kuri vairākos sarakstos atrodas vienā un tajā pašā pozīcijā.


## Syntax

```powerquery
List.Zip(
    lists as list
) as list
```


## Details

Tiek apstrādāts sarakstu saraksts, <code>lists</code>, un atgriezts sarakstu saraksts, kurā apvienoti vienā un tajā pašā pozīcijā esoši vienumi.


## Examples

### Example #1 
Tilpsaspiež šos divus vienkāršos sarakstus: \{1, 2} un \{3, 4}.
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
Tilpsaspiež šos divus dažāda garuma vienkāršos sarakstus: \{1, 2} un \{3}.
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
