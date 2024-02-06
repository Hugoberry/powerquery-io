---
title: List.RemoveLastN
---

# List.RemoveLastN


傳回清單，移除清單結尾指定數目的項目。


## Syntax

```powerquery
List.RemoveLastN(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

傳回清單，移除清單 <code>list</code> 結尾最後 <code>countOrCondition</code> 個項目。如果 <code>list</code> 中的項目數少於 <code>countOrCondition</code>，即傳回空的清單。 <ul> <li>如果指定了數字，最多移除該數量的項目。</li> <li>如果指定了條件，傳回的清單結尾是 <code>list</code> 末端符合條件的第一個項目。一旦有項目不符合條件，就不再考慮其他項目。</li> <li>如果這個參數是 null，則只移除一個項目。</li> </ul>


## Examples

### Example #1 
根據 \{1, 2, 3, 4, 5} 建立不含末 3 個數字的清單。
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
根據 \{5, 4, 2, 6, 4} 建立以小於 3 的數字結束的清單。
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
