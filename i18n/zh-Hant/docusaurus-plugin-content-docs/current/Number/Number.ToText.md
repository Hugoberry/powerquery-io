---
title: Number.ToText
---

# Number.ToText


將指定的數字轉換成文字。


## Syntax

```powerquery
Number.ToText(
    number as number,
    optional format as text,
    optional culture as text
) as text
```


## Remarks

根據 <code>format</code> 指定的格式將數值 <code>number</code> 轉換成文字值。<br />    <br />    此格式是文字值，表示數字的轉換方式。如需支援格式值的詳細資料，請移至 https://go.microsoft.com/fwlink/?linkid=2241210 和 https://go.microsoft.com/fwlink/?linkid=2240884。<br />    <br />    也可能提供選用的 <code>culture</code> (例如「en-US」) 以控制 <code>format</code> 的文化相依行為。


## Examples

### Example #1 
將數字轉換為文字，不指定格式。
```powerquery
Number.ToText(4)
```

Result: 
```powerquery
"4"
```


### Example #2 
將數字轉換成指數格式。
```powerquery
Number.ToText(4, "e")
```

Result: 
```powerquery
"4.000000e+000"
```


### Example #3 
將數位轉換成只有一個小數位數的百分比格式。
```powerquery
Number.ToText(-0.1234, "P1")
```

Result: 
```powerquery
"-12.3 %"
```




## Category
Number.Conversion and formatting
