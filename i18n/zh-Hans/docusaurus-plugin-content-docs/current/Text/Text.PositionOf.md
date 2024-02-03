---
title: Text.PositionOf
---

# Text.PositionOf


## Description

返回值的第一个位置(如果找不到，则返回 -1)。


## Syntax

```powerquery
Text.PositionOf(
    text as text,
    substring as text,
    optional occurrence as Occurrence.Type,
    optional comparer as function
) as any
```


## Details

返回在 <code>text</code> 中找到的文本值 <code>substring</code> 的指定出现位置。    可选参数 <code>occurrence</code> 可用于指定要返回的出现位置(默认值为第一次出现)。    如果未找到 <code>substring</code>，则返回 -1。      <div>        <code>comparer</code> 是用于控制比较的 <code>Comparer</code>。比较器可用于提供不区分大小写的比较或区分区域性与区域设置的比较。      </div>      <div>        以下内置比较器以公式语言提供:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: 用于执行精确的序号比较</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: 用于执行不区分大小写的精确序号比较</li>        <li> <code>Comparer.FromCulture</code>: 用于执行区分区域性的比较</li>      </ul>


## Examples

### Example #1 
获取 &#34;World&#34; 在文本 &#34;Hello, World! Hello, World!&#34; 中第一次出现的位置。
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World")
```

Result: 
```powerquery
7
```


### Example #2 
获取 &#34;World&#34; 在 &#34;Hello, World! Hello, World!&#34; 中最后一次出现的位置。
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World", Occurrence.Last)
```

Result: 
```powerquery
21
```




## Category
Text.Membership
