---
title: BinaryFormat.Transform
---

# BinaryFormat.Transform


## Description

別のバイナリ形式によって読み取られた値を変換するバイナリ形式を返します。


## Syntax

```powerquery
BinaryFormat.Transform(
    binaryFormat as function,
    function as function
) as function
```


## Details

別のバイナリ形式によって読み取られた値を変換するバイナリ形式を返します。<code>binaryFormat</code> パラメーターは、値の読み取りに使用されるバイナリ形式を指定します。読み取られた値を使って <code>function</code> が呼び出され、変換された値が返されます。


## Examples

### Example #1 
バイトを読み取り、それにバイトを追加します。
```powerquery
let
    binaryData = #binary({1}),
    transformFormat = BinaryFormat.Transform(
        BinaryFormat.Byte,
        (x) => x + 1
    )
in
    transformFormat(binaryData)
```

Result: 
```powerquery
2
```




## Category
Binary Formats.Transforming what was read
