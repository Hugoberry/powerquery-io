---
title: List.Zip
---

# List.Zip


## Description

Sujungiant elementus toje pačioje kelių sąrašų padėtyje, pateikiamas sąrašų sąrašas.


## Syntax

```powerquery
List.Zip(
    lists as list
) as list
```


## Details

Paimamas sąrašų sąrašas – <code>lists</code> – ir, sujungiant elementus toje pačioje padėtyje, pateikiamas sąrašų sąrašas.


## Examples

### Example #1 
Suglaudinami du paprasti sąrašai \{1, 2} ir \{3, 4}.
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
Suglaudinami du paprasti skirtingų ilgių sąrašai \{1, 2} ir \{3}.
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
