---
title: List.Zip
---

# List.Zip


## Description

Повертає список списків, поєднуючи елементи в тому ж положенні в кількох списках.


## Syntax

```powerquery
List.Zip(
    lists as list
) as list
```


## Details

Приймає список списків (<code>lists</code>) і повертає список списків, поєднуючи елементи в тому ж положенні.


## Examples

### Example #1 
Запаковує два прості списки: \{1, 2} і \{3, 4}.
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
Запаковує два прості списки різної довжини: \{1, 2} і \{3}.
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
