---
title: Type.NonNullable
---

# Type.NonNullable


Возвращает тип, не допускающий значение &#34;null&#34;.


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Remarks

Возвращает тип, не являющийся <code>nullable</code>, из <code>type</code>.


## Examples

### Example #1 
Возврат типа, не допускающего значение &#34;null&#34;, &lt;code&gt;type nullable number&lt;/code&gt;.
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
