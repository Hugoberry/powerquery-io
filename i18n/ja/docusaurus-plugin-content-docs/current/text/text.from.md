---
title: Text.From
---

# Text.From


指定された値からテキスト値を作成します。


## Syntax

```powerquery
Text.From(
    value as any,
    optional culture as text
) as text
```


## Remarks

<code>value</code> のテキスト表記を返します。<code>value</code> は、<code>number</code>、<code>date</code>、<code>time</code>、<code>datetime</code>、<code>datetimezone</code>、<code>logical</code>、<code>duration</code>、<code>binary</code> のいずれかの値になります。    指定された値が null の場合、<code>Text.From</code> から null が返されます。省略可能な <code>culture</code> を指定することもできます (例: "en-US")。


## Examples

### Example #1 
数値の 3 からテキスト値を作成します。
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```




## Category
Text.Conversions from and to text
