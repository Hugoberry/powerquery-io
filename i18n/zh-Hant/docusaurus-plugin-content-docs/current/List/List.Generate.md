---
title: List.Generate
---

# List.Generate


產生值清單。


## Syntax

```powerquery
List.Generate(
    initial as function,
    condition as function,
    next as function,
    optional selector as function
) as list
```


## Remarks

使用提供的函數產生值清單。<code>initial</code>函數會產生起始候選值，然後針對<code>condition</code>測試。    如果候選值已核准，則會作為結果清單的一部分傳回，而下一個候選值則會透過將新核准的值傳遞給<code>next</code>而產生。    一旦候選值無法比對<code>condition</code>，清單產生流程就會停止。    也可以提供選擇性參數 <code>selector</code>，以轉換結果清單中的項目。


## Examples

### Example #1 
建立清單，從十開始、重複遞減一個，並確定每個項目大於零。
```powerquery
List.Generate(() => 10, each _ > 0, each _ - 1)
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```


### Example #2 
產生包含 x 和 y 的記錄清單，其中 x 是值，y 是清單。x 應保持小於 10 且代表清單 y 中的項目數目。產生清單之後，只傳回 x 值。
```powerquery
List.Generate(
    () => [x = 1, y = {}],
    each [x] < 10,
    each [x = List.Count([y]), y = [y] & {x}],
    each [x]
)
```

Result: 
```powerquery
{1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
```




## Category
List.Generators
