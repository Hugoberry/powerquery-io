---
title: Value.Type
---

# Value.Type


Көрсетілген мәннің түрін қайтарады.


## Syntax

```powerquery
Value.Type(
    value as any
) as type
```


## Remarks

Көрсетілген мәннің түрін қайтарады.

-   `value`: Түрі қайтарылатын мән.


## Examples

### Example #1
Көрсетілген санның түрін қайтарады.
```powerquery
Value.Type(243.448)
```

Result: 
```powerquery
type number
```


### Example #2
Көрсетілген күннің түрін қайтарады.
```powerquery
Value.Type(#date(2010, 12, 31))
```

Result: 
```powerquery
type date
```


### Example #3
Көрсетілген жазбаның түрін қайтарады.
```powerquery
Value.Type([a = 1, b = 2])
```

Result: 
```powerquery
type record
```




## Category
Values
