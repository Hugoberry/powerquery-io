---
title: Text.StartsWith
---

# Text.StartsWith


指示文本是否以指定的值开头。


## Syntax

```powerquery
Text.StartsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

如果文本值 <code>text</code> 以文本值 <code>substring</code> 开头，则返回 true。      <ul>        <li><code>text</code>: <i></i> 要搜索的 <code>text</code> 值</li>        <li><code>substring</code>: <i></i> 一个 <code>text</code> 值，即要在 <code>substring</code> 中搜索的 substring</li>        <li><code>comparer</code>: <i>[可选]</i> 用于控制比较的 <code>Comparer</code>。例如，<code>Comparer.OrdinalIgnoreCase</code> 可用于执行不区分大小写的搜索</li>      </ul>      <div>        <code>comparer</code> 是用于控制比较的 <code>Comparer</code>。比较器可用于提供不区分大小写或区分区域性和区域设置的比较。      </div>      <div>        以下内置比较器以公式语言提供:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: 用于执行确切的序号比较</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: 用于执行不区分大小写的精确的序号比较</li>        <li> <code>Comparer.FromCulture</code>: 用于执行区分区域性的比较</li>      </ul>


## Examples

### Example #1 
检查文本 &#34;Hello, World&#34; 是否以文本 &#34;hello&#34; 开头。
```powerquery
Text.StartsWith("Hello, World", "hello")
```

Result: 
```powerquery
false
```


### Example #2 
检查文本 &#34;Hello, World&#34; 是否以文本 &#34;Hello&#34; 开头。
```powerquery
Text.StartsWith("Hello, World", "Hello")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
