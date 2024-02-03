---
title: Binary.Split
---

# Binary.Split


## Description

指定のバイナリを、指定のページ サイズを使ったバイナリのリストに分割します。


## Syntax

```powerquery
Binary.Split(
    binary as binary,
    pageSize as number
) as list
```


## Details

<code>binary</code> をバイナリのリストに分割します。出力リストの最初の要素は、    ソース バイナリからの最初の <code>pageSize</code> バイトを含むバイナリです。出力リストの次の要素は、ソース バイナリからの次の <code>pageSize</code> バイトを含むバイナリで、以下同様になります。



## Category
Binary
