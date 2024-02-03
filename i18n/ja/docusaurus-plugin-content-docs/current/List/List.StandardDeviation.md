---
title: List.StandardDeviation
---

# List.StandardDeviation


## Description

標本に基づいて予測した標準偏差を返します。


## Syntax

```powerquery
List.StandardDeviation(
    numbersList as list
) as number
```


## Details

リスト <code>numbersList</code> の値の、標本に基づいて予測した標準偏差を返します。    <code>numbersList</code> が数値のリストの場合は、数値が返されます。    リストが空の場合や、リスト内の項目が <code>number</code> 型でない場合は、例外がスローされます。


## Examples

### Example #1 
1 ～ 5 の数の標準偏差を求めます。
```powerquery
List.StandardDeviation({1..5})
```

Result: 
```powerquery
1.5811388300841898
```




## Category
List.Averages
