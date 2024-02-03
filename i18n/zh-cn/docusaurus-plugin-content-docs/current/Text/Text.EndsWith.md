---
title: Text.EndsWith
---

# Text.EndsWith


## Description

指示文本是否以指定的值结尾。


## Syntax

```powerquery
Text.EndsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

指示给定的文本 <code>text</code> 是否以指定值 <code>substring</code> 结尾。指示区分大小写。      <div>        <code>comparer</code>是用于控制比较的 <code>Comparer</code>。比较器可用于提供不区分大小写或区分区域性和区域设置的比较。      </div>      <div>        以下内置比较器以公式语言提供:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: 用于执行精确的序号比较</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: 用于执行不区分大小写的精确序号比较</li>        <li> <code>Comparer.FromCulture</code>: 用于执行区分区域性的比较</li>      </ul>


## Examples

### Example #1 
检查 &#34;Hello, World&#34; 是否以 &#34;world&#34; 结尾。
```powerquery
Text.EndsWith("Hello, World", "world")
```

Result: 
```powerquery
false
```


### Example #2 
检查 &#34;Hello, World&#34; 是否以 &#34;World&#34; 结尾。
```powerquery
Text.EndsWith("Hello, World", "World")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
