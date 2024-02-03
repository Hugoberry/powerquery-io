---
title: List.SingleOrDefault
---

# List.SingleOrDefault


## Description

長さが 1 のリストに対して 1 つのリスト項目を返し、空のリストに対しては既定値を返します。


## Syntax

```powerquery
List.SingleOrDefault(
    list as list,
    optional default as any
) as any
```


## Details

リスト <code>list</code> に含まれる項目が 1 つしかない場合は、その項目を返します。    リストが空で、かつ省略可能な <code>default</code> が指定されていない場合、この関数は NULL を返します。リストに複数の項目が含まれている場合、この関数はエラーを返します。


## Examples

### Example #1 
リスト \{1} 内の単独の値を求めます。
```powerquery
List.SingleOrDefault({1})
```

Result: 
```powerquery
1
```


### Example #2 
リスト \{} 内の単独の値を求めます。
```powerquery
List.SingleOrDefault({})
```

Result: 
```powerquery
null
```


### Example #3 
リスト \{} 内の単独の値を求めます。空の場合は、-1 を返します。
```powerquery
List.SingleOrDefault({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
