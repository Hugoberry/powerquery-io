---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


Возвращает данные о том, является ли тип записи открытым.


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Remarks

Возвращает значение <code>logical</code>, указывающее, является ли запись <code>type</code> открытой.


## Examples

### Example #1 
Определить, является ли запись &lt;code&gt;type [ A = число, ...]&lt;/code&gt; открытой.
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
