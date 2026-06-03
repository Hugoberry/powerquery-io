---
title: List.Split
---

# List.Split


指定のリストを、指定のページ サイズを使ったリストのリストに分割します。


## Syntax

```powerquery
List.Split(
    list as list,
    pageSize as number
) as list
```


## Remarks

`list` をリストのリストに分割します。出力リストの最初の要素は、ソース リスト から最初の `pageSize` 要素を含むリストです。出力リストの次の要素は、ソース リストの次の `pageSize` 要素を含むリストです。以下同様。



## Category
List.Transformation functions
