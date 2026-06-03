---
title: Binary.Split
---

# Binary.Split


指定のバイナリを、指定のページ サイズを使ったバイナリのリストに分割します。


## Syntax

```powerquery
Binary.Split(
    binary as binary,
    pageSize as number
) as list
```


## Remarks

`binary` をバイナリのリストに分割します。出力リストの最初の要素は、 ソース バイナリからの最初の `pageSize` バイトを含むバイナリです。出力リストの次の要素は、ソース バイナリからの次の `pageSize` バイトを含むバイナリで、以下同様になります。



## Category
Binary
