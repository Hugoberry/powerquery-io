---
title: List.LastN
---

# List.LastN


## Description

傳回清單的最後一個值。可選擇性地指定要傳回的值數目或限定條件。


## Syntax

```powerquery
List.LastN(
    list as list,
    optional countOrCondition as any
) as any
```


## Details

傳回清單 <code>list</code> 的最後一個項目。如果清單是空的，則擲回例外狀況。 這個函數可接受選擇性的參數 <code>countOrCondition</code>，以支援收集多個項目或篩選項目。<code>countOrCondition</code> 可以用三種方式指定: <ul>  <li>如果指定了數字，最多傳回該數量的項目。</li>  <li>如果指定了條件，則從清單結尾開始，傳回最初符合條件的所有項目。一旦有項目不符合條件，就不再考慮其他項目。</li>  <li>如果這個參數是 null，則傳回清單的最後一個項目。</li> </ul>


## Examples

### Example #1 
找出清單 \{3, 4, 5, -1, 7, 8, 2} 中的最後一個值。
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, 1)
```

Result: 
```powerquery
{2}
```


### Example #2 
找出清單 \{3, 4, 5, -1, 7, 8, 2} 中大於 0 的最後一個值。
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{7, 8, 2}
```




## Category
List.Selection
