---
title: BinaryFormat.Length
---

# BinaryFormat.Length


読み取ることができるデータの量を制限するバイナリ形式を返します。


## Syntax

```powerquery
BinaryFormat.Length(
    binaryFormat as function,
    length as any
) as function
```


## Remarks

読み取ることができるデータの量を制限するバイナリ形式を返します。データの末尾まで読み取るには、<code>BinaryFormat.List</code> および <code>BinaryFormat.Binary</code> を使用することができます。読み取るバイト数を制限するには、<code>BinaryFormat.Length</code> を使用できます。<code>binaryFormat</code> パラメーターは、制限するバイナリ形式を指定します。<code>length</code> パラメーターは、読み取るバイト数を指定します。<code>length</code> パラメーターでは、数値か、読み取る値の前にある長さの値の形式を指定するバイナリ形式値を指定できます。


## Examples

### Example #1 
バイトのリストを読み取っている場合に、読み取るバイト数を 2 に制限します。
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.Length(
        BinaryFormat.List(BinaryFormat.Byte),
        2
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
バイトのリストを読み取っている場合に、読み取るバイト数をリストの前のバイト値に制限します。
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.Length(
        BinaryFormat.List(BinaryFormat.Byte),
        BinaryFormat.Byte
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{2}
```




## Category
Binary Formats.Limiting input
