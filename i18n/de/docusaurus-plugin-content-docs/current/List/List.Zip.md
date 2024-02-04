---
title: List.Zip
---

# List.Zip


## Description

Gibt eine Liste von Listen zurück, indem Elemente an der gleichen Position in mehreren Listen kombiniert werden.


## Syntax

```powerquery
List.Zip(
    lists as list
) as list
```


## Details

Akzeptiert eine Liste von Listen, <code>lists</code>, und gibt eine Liste von Listen zurück, indem Elemente an derselben Position kombiniert werden.


## Examples

### Example #1 
Zippt die beiden einfachen Listen &#34;\{1, 2}&#34; und &#34;\{3, 4}&#34;.
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
Zippt die beiden einfachen Listen unterschiedlicher Länge &#34;\{1, 2}&#34; und &#34;\{3}&#34;.
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
