---
title: Value.Type
---

# Value.Type


Tiek atgriezts norādītās vērtības tips.


## Syntax

```powerquery
Value.Type(
    value as any
) as type
```


## Remarks

Tiek atgriezts norādītās vērtības tips.

-   `value`: vērtība, kuras tips tiek atgriezts.


## Examples

### Example #1
Atgriež norādītā skaitļa tipu.
```powerquery
Value.Type(243.448)
```

Result: 
```powerquery
type number
```


### Example #2
Atgriež norādītā datuma tipu.
```powerquery
Value.Type(#date(2010, 12, 31))
```

Result: 
```powerquery
type date
```


### Example #3
Atgriež norādītā ieraksta tipu.
```powerquery
Value.Type([a = 1, b = 2])
```

Result: 
```powerquery
type record
```




## Category
Values
