---
title: Text.Contains
---

# Text.Contains


## Description

返回文本是否包含子字符串。


## Syntax

```powerquery
Text.Contains(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

检测 <code>text</code> 是否包含值 <code>substring</code>。如果找到该值，则返回 true。此函数不支持通配符或正则表达式。      <br />      <br />      可选参数 <code>comparer</code> 可用于指定不区分大小写的比较或区分区域性和区域设置的比较。      以下内置比较器以公式语言提供:      <ul>        <li><code>Comparer.Ordinal</code>: 用于执行区分大小写的序号比较</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: 用于执行不区分大小写的序号比较</li>        <li><code>Comparer.FromCulture</code>: 用于执行区分区域性的比较</li>      </ul>


## Examples

### Example #1 
查找文本 &#34;Hello World&#34; 是否包含 &#34;Hello&#34;。
```powerquery
Text.Contains("Hello World", "Hello")
```

Result: 
```powerquery
true
```


### Example #2 
查找文本 &#34;Hello World&#34; 是否包含 &#34;hello&#34;。
```powerquery
Text.Contains("Hello World", "hello")
```

Result: 
```powerquery
false
```


### Example #3 
使用不区分大小写的比较器查找文本 &#34;Hello World&#34; 是否包含 &#34;hello&#34;。
```powerquery
Text.Contains("Hello World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership
