---
title: List.IsEmpty
---

# List.IsEmpty


## Description

リストが空の場合、true を返します。


## Syntax

```powerquery
List.IsEmpty(
    list as list
) as logical
```


## Details

リスト <code>list</code> に値が含まれない場合 (長さが 0 の場合)、<code>true</code> を返します。リストに値が含まれる場合 (長さ > 0 の場合)、<code>false</code> を返します。


## Examples

### Example #1 
リスト \{} が空かどうかを調べます。
```powerquery
List.IsEmpty({})
```

Result: 
```powerquery
true
```


### Example #2 
リスト \{1, 2} が空かどうかを調べます。
```powerquery
List.IsEmpty({1, 2})
```

Result: 
```powerquery
false
```




## Category
List.Information
