---
title: BinaryFormat.List
---

# BinaryFormat.List


## Description

アイテムのシーケンスを読み取ってリストを返すバイナリ形式を返します。


## Syntax

```powerquery
BinaryFormat.List(
    binaryFormat as function,
    optional countOrCondition as any
) as function
```


## Details

アイテムのシーケンスを読み取って <code>list</code> を返すバイナリ形式を返します。<code>binaryFormat</code> パラメーターは、各アイテムのバイナリ形式を指定します。読み取るアイテムの数を決めるには、次の 3 つの方法があります。<ul><li><code>countOrCondition</code> が指定されていない場合、バイナリ形式は最後のアイテムまで読み取ります。</li><li><code>countOrCondition</code> が数値の場合、バイナリ形式はその数のアイテムを読み取ります。</li><li><code>countOrCondition</code> が関数の場合は、読み取られるアイテムごとに、その関数が呼び出されます。関数は、アイテムの読み取りを続行する場合は true を返し、停止する場合は false を返します。最後のアイテムは、リストに含まれます。</li><li><code>countOrCondition</code> がバイナリ形式である場合は、アイテムの数がリストに先行すると予期され、数の読み取りには指定された形式が使用されます。</li></ul>


## Examples

### Example #1 
データの末尾までバイトを読み取ります。
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.List(BinaryFormat.Byte)
in
    listFormat(binaryData)
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2 
2 バイトを読み取ります。
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.List(BinaryFormat.Byte, 2)
in
    listFormat(binaryData)
```

Result: 
```powerquery
{1, 2}
```


### Example #3 
バイト値が 2 以上になるまでバイトを読み取ります。
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.List(BinaryFormat.Byte, (x) => x < 2)
in
    listFormat(binaryData)
```

Result: 
```powerquery
{1, 2}
```




## Category
Binary Formats.Reading lists
