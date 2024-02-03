---
title: List.Combine
---

# List.Combine


## Description

Бірнеше тізімді біріктіру арқылы бір тізімді қайтарады.


## Syntax

```powerquery
List.Combine(
    lists as list
) as list
```


## Details

<code>lists</code> тізімдер тізімін алып, оларды бір жаңа тізімге біріктіреді.


## Examples

### Example #1 
\{1, 2} және \{3, 4} екі қарапайым тізімін біріктіру.
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
\{1, 2} және \{3, \{4, 5}} екі тізімін біріктіру, біреуі енгізілген тізімді қамтиды.
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
