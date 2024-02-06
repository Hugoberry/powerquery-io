---
title: List.StandardDeviation
---

# List.StandardDeviation


傳回根據樣本估計的標準差。


## Syntax

```powerquery
List.StandardDeviation(
    numbersList as list
) as number
```


## Remarks

傳回清單 <code>numbersList</code> 中值的標準差取樣型估計值。    若 <code>numbersList</code> 為數值清單，就會傳回數值。    若為空白清單或非 <code>number</code> 類型的項目清單，則會擲回例外狀況。


## Examples

### Example #1 
找出數字 1 到 5 的標準差。
```powerquery
List.StandardDeviation({1..5})
```

Result: 
```powerquery
1.5811388300841898
```




## Category
List.Averages
