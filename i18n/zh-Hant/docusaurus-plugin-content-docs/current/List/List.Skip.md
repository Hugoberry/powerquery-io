---
title: List.Skip
---

# List.Skip


傳回清單，略過清單開頭指定數目的項目。


## Syntax

```powerquery
List.Skip(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

傳回清單，略過清單 <code>list</code> 的第一個項目。如果 <code>list</code> 是空的清單，即傳回空的清單。這個函數接受選擇性參數 <code>countOrCondition</code>，以支援略過下列多個值。 <ul> <li>如果指定了數字，最多略過該數量的項目。 </li> <li>如果指定了條件，傳回的清單開頭是 <code>list</code> 中符合條件的第一個項目。一旦有項目不符合條件，就不再考慮其他項目。</li> <li>如果這個參數是 Null，則依照預設行為。</li> </ul>


## Examples

### Example #1 
根據 \{1, 2, 3, 4, 5} 建立不含前 3 個數字的清單。
```powerquery
List.Skip({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2 
根據 \{5, 4, 2, 6, 1} 建立以小於 3 的數字開頭的清單。
```powerquery
List.Skip({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Selection
