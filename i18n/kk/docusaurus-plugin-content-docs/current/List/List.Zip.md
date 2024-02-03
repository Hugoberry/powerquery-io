---
title: List.Zip
---

# List.Zip


## Description

Бірнеше тізімде бірдей орындағы элементтерді біріктіре отырып тізімдердің тізімін қайтарады.


## Syntax

```powerquery
List.Zip(
    lists as list
) as list
```


## Details

<code>lists</code> тізімдердің тізімін алады және бірдей орындағы элементтерді біріктіре отырып тізімдердің тізімін қайтарады.


## Examples

### Example #1 
\{1, 2} және \{3, 4} екі қарапайым тізімді қысады.
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
\{1, 2} және \{3} әр түрлі ұзындықтағы екі қарапайым тізімді қысады.
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
