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

傳回清單 `numbersList` 中值的標準差取樣型估計值。 如果 `numbersList` 為數值清單，則傳回數值。 如果是空白清單或不是 `number` 類型的項目清單，則引發錯誤。


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
