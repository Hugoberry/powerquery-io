---
title: List.Buffer
---

# List.Buffer


リストをバッファー処理します。


## Syntax

```powerquery
List.Buffer(
    list as list
) as list
```


## Remarks

リスト <code>list</code> をメモリにバッファー処理します。この呼び出しの結果は、安定したリストです。


## Examples

### Example #1 
リスト \{1..10} の安定したコピーを作成します。
```powerquery
List.Buffer({1..10})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
```




## Category
List.Selection
