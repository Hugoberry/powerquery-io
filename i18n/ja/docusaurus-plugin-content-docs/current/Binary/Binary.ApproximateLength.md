---
title: Binary.ApproximateLength
---

# Binary.ApproximateLength


## Description

バイナリのおおよその長さを返します。


## Syntax

```powerquery
Binary.ApproximateLength(
    binary as binary
) as number
```


## Details

<code>binary</code>内のおおよその長さを返します。または、データ ソースが近似をサポートしていない場合はエラーを返します。


## Examples

### Example #1 
バイナリ値のおおよその長さを取得します。
```powerquery
Binary.ApproximateLength(Binary.FromText("i45WMlSKjQUA", BinaryEncoding.Base64))
```

Result: 
```powerquery
9
```




## Category
Binary
