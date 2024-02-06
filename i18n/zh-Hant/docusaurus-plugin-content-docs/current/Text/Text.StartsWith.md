---
title: Text.StartsWith
---

# Text.StartsWith


指出文字是否以指定的值為開頭。


## Syntax

```powerquery
Text.StartsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

若文字值 <code>text</code> 的開頭為文字值 <code>substring</code>，則傳回 true。      <ul>        <li><code>text</code>: <i></i> 要搜尋的 <code>text</code> 值</li>        <li><code>substring</code>: <i></i> 要在 <code>substring</code> 中搜尋其子字串的 <code>text</code> 值</li>        <li><code>comparer</code>: <i>[選擇性]</i> <code>Comparer</code>，用於控制比較。例如，<code>Comparer.OrdinalIgnoreCase</code> 可用來執行不區分大小寫的搜尋</li>      </ul>      <div>        <code>comparer</code> 是 <code>Comparer</code>，可用來控制比較。比較子可用來提供不區分大小寫的比較或文化特性感知與地區設定的比較。      </div>      <div>        公式語言中提供下列內建比較子:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: 用來執行精確序數比較</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: 用來執行不區分大小寫的精確序數比較</li>        <li> <code>Comparer.FromCulture</code>: 用來執行文化特性感知的比較</li>      </ul>


## Examples

### Example #1 
檢查文字 &#34;Hello, World&#34; 是否以文字 &#34;hello&#34; 為開頭。
```powerquery
Text.StartsWith("Hello, World", "hello")
```

Result: 
```powerquery
false
```


### Example #2 
檢查文字 &#34;Hello, World&#34; 是否以文字 &#34;Hello&#34; 為開頭。
```powerquery
Text.StartsWith("Hello, World", "Hello")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
