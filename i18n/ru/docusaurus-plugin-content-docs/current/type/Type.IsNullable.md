---
title: Type.IsNullable
---

# Type.IsNullable


Возвращает значение &#34;true&#34;, если тип является допускающим значение &#34;null&#34;. В противном случае возвращается значение &#34;false&#34;.


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Remarks

Возвращает <code>true</code>, если тип является типом <code>nullable</code>; в противном случае, возвращается <code>false</code>.


## Examples

### Example #1 
Определяет, является ли &lt;code&gt;number&lt;/code&gt; допускающим значение &#34;null&#34;.
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2 
Определяет, является ли &lt;code&gt;type nullable number&lt;/code&gt; допускающим значение &#34;null&#34;.
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
