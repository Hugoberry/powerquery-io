---
title: Comparer.Equals
---

# Comparer.Equals


## Description

依兩個指定的值為基礎進行的相等比較檢查傳回邏輯錯誤。


## Syntax

```powerquery
Comparer.Equals(
    comparer as function,
    x as any,
    y as any
) as logical
```


## Details

使用提供的 <code>comparer</code> 對兩個指定值 <code>x</code> 和 <code>y</code> 進行相等比較檢查，據以傳回 <code>logical</code> 值。      <div>        <code>comparer</code> 是 <code>Comparer</code>，可用來控制比較。        比較子函數接受兩個引數，並根據第一個值小於、等於或大於秒數，傳回 -1、0 或 1。        比較子可用來提供不區分大小寫或文化特性與地區設定感知的比較。      </div>      <div>        公式語言中提供下列內建比較子:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: 用來執行精確序數比較</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: 用來執行不區分大小寫的精確序數比較</li>        <li> <code>Comparer.FromCulture</code>: 用來執行文化特性感知的比較</li>      </ul>


## Examples

### Example #1 
使用 &#34;en-US&#34; 地區比較  &#34;1&#34; 和 &#34;A&#34; 以判斷值是否相等。
```powerquery
Comparer.Equals(Comparer.FromCulture("en-US"), "1", "A")
```

Result: 
```powerquery
false
```




## Category
Comparer
