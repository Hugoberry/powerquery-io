---
title: Text.Contains
---

# Text.Contains


## Description

傳回文字是否包含子字串。


## Syntax

```powerquery
Text.Contains(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

偵測 <code>text</code> 是否包含值 <code>substring</code>。如果找到值，則傳回 True。此函數不支援萬用字元或規則運算式。      <br />      <br />      選擇性引數 <code>comparer</code> 可用來指定不區分大小寫或文化特性與地區設定感知的比較。      公式語言中提供下列內建比較子:      <ul>        <li><code>Comparer.Ordinal</code>: 用來執行區分大小寫的序數比較</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: 用來執行不區分大小寫的序數比較</li>        <li> <code>Comparer.FromCulture</code>: 用來執行文化特性感知的比較</li>      </ul>


## Examples

### Example #1 
找出文字 &#34;Hello World&#34; 是否包含 &#34;Hello&#34;。
```powerquery
Text.Contains("Hello World", "Hello")
```

Result: 
```powerquery
true
```


### Example #2 
找出文字 &#34;Hello World&#34; 是否包含 &#34;hello&#34;。
```powerquery
Text.Contains("Hello World", "hello")
```

Result: 
```powerquery
false
```


### Example #3 
使用不區分大小寫的比較子來尋找文字 &#34;Hello World&#34; 是否包含 &#34;hello&#34;。
```powerquery
Text.Contains("Hello World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership
