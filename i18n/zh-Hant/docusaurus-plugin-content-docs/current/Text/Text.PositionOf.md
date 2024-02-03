---
title: Text.PositionOf
---

# Text.PositionOf


## Description

傳回值的第一個位置 (如果找不到，則傳回 -1)。


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

傳回在 <code>text</code> 中，指定的文字值 <code>substring</code> 出現位置。    選用參數 <code>occurrence</code> 可用來指定要傳回的出現位置 (預設是第一次出現的位置)。    如果找不到 <code>substring</code>，則傳回 -1。      <div>        <code>comparer</code> 是 <code>Comparer</code>，可用來控制比較。比較子可用來提供不區分大小寫或文化特性與地區設定感知的比較。      </div>      <div>        公式語言中提供下列內建比較子:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: 用來執行精確序數比較</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: 用來執行不區分大小寫的精確序數比較</li>        <li> <code>Comparer.FromCulture</code>: 用來執行文化特性感知的比較</li>      </ul>


## Examples

### Example #1 
取得文字 &#34;Hello, World! Hello, World!&#34; 中第一次出現 &#34;World&#34; 的位置。
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World")
```

Result: 
```powerquery
7
```


### Example #2 
取得 &#34;Hello, World! Hello, World!&#34; 中最後一次出現 &#34;World&#34; 的位置。
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World", Occurrence.Last)
```

Result: 
```powerquery
21
```




## Category
Text.Membership
