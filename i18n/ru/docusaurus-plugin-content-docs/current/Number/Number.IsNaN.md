---
title: Number.IsNaN
---

# Number.IsNaN


## Description

Указывает, является ли значение NaN (нечисловым).


## Syntax

```powerquery
Number.IsNaN(
    number as number
) as logical
```


## Details

Указывает, является ли значение NaN (нечисловым). Возвращает <code>true</code>, если значение <code>number</code> эквивалентно <code>Number.IsNaN</code>, и <code>false</code> - в противном случае.


## Examples

### Example #1 
Проверьте, будет ли получено NaN при делении 0 на 0.
```powerquery
Number.IsNaN(0/0)
```

Result: 
```powerquery
true
```


### Example #2 
Проверьте, будет ли получено NaN при делении 1 на 0.
```powerquery
Number.IsNaN(1/0)
```

Result: 
```powerquery
false
```




## Category
Number.Information
