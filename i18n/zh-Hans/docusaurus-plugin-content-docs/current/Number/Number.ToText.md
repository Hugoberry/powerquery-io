---
title: Number.ToText
---

# Number.ToText


将给定数字转换为文本。


## Syntax

```powerquery
Number.ToText(
    number as number,
    optional format as text,
    optional culture as text
) as text
```


## Remarks

根据 <code>format</code>指定的格式，将数值 <code>number</code>转换为文本值。<br />    <br />    格式是一个文本值，指示应如何转换数字。有关支持的格式值的详细信息，请转到 https://go.microsoft.com/fwlink/?linkid=2241210 和 https://go.microsoft.com/fwlink/?linkid=2240884。<br />    <br />    也可以提供可选 <code>culture</code> (例如，"en-US")来控制 <code>format</code> 的区域性相关行为。


## Examples

### Example #1 
在不指定格式的情况下将数字转换为文本。
```powerquery
Number.ToText(4)
```

Result: 
```powerquery
"4"
```


### Example #2 
将数字转换为指数格式。
```powerquery
Number.ToText(4, "e")
```

Result: 
```powerquery
"4.000000e+000"
```


### Example #3 
将数字转换为仅包含一位小数的百分比格式。
```powerquery
Number.ToText(-0.1234, "P1")
```

Result: 
```powerquery
"-12.3 %"
```




## Category
Number.Conversion and formatting
