---
title: List.Combine
---

# List.Combine


## Description

Fasst mehrere Listen zusammen, um eine einzelne Liste zurückzugeben.


## Syntax

```powerquery
List.Combine(
    lists as list
) as list
```


## Details

Führt eine Liste mit Listen (<code>lists</code>) zu einer einzelnen neuen Liste zusammen.


## Examples

### Example #1 
Kombiniert die beiden einfachen Listen &#34;\{1, 2}&#34; und &#34;\{3, 4}&#34;.
```powerquery
List.Combine({{1, 2}, {3, 4}})
```

Result: 
```powerquery
{
    1,
    2,
    3,
    4
}
```


### Example #2 
Kombiniert die beiden Listen &#34;\{1, 2}&#34; und &#34;\{3, \{4, 5}}&#34;, wobei eine der Listen eine geschachtelte Liste enthält.
```powerquery
List.Combine({{1, 2}, {3, {4, 5}}})
```

Result: 
```powerquery
{
    1,
    2,
    3,
    {4, 5}
}
```




## Category
List.Transformation functions
