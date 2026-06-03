---
title: List.Zip
---

# List.Zip


Gibt eine Liste von Listen zurück, indem Elemente an der gleichen Position in mehreren Listen kombiniert werden.


## Syntax

```powerquery
List.Zip(
    lists as list
) as list
```


## Remarks

Akzeptiert eine Liste von Listen, `lists`, und gibt eine Liste von Listen zurück, indem Elemente an derselben Position kombiniert werden.


## Examples

### Example #1
Zippt die beiden einfachen Listen "\{1, 2\}" und "\{3, 4\}".
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
Zippt die beiden einfachen Listen unterschiedlicher Länge "\{1, 2\}" und "\{3\}".
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
