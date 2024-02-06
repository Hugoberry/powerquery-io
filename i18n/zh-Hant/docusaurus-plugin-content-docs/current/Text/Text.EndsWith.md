---
title: Text.EndsWith
---

# Text.EndsWith


指出文字是否以指定的值為結尾。


## Syntax

```powerquery
Text.EndsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

指出指定的文字 <code>text</code> 是否以指定的值 <code>substring</code> 做為結尾。該指示區分大小寫。      <div>        <code>comparer</code> 是 <code>Comparer</code>，用來控制比較。比較子可用來提供不區分大小寫或文化特性與地區設定感知的比較。      </div>      <div>         公式語言中提供下列內建比較子:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: 用來執行精確序數比較</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: 用來執行不區分大小寫的精確序數比較</li>        <li> <code>Comparer.FromCulture</code>: 用來執行文化特性感知的比較</li>      </ul>


## Examples

### Example #1 
檢查 &#34;Hello, World&#34; 是否以 &#34;world&#34; 為結尾。
```powerquery
Text.EndsWith("Hello, World", "world")
```

Result: 
```powerquery
false
```


### Example #2 
檢查 &#34;Hello, World&#34; 是否以 &#34;World&#34; 為結尾。
```powerquery
Text.EndsWith("Hello, World", "World")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
