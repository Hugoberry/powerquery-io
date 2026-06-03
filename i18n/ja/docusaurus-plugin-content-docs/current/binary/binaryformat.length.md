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

読み取ることができるデータの量を制限するバイナリ形式を返します。 `BinaryFormat.List` と `BinaryFormat.Binary` の両方を使用して、データの末尾まで読み取ることができます。 `BinaryFormat.Length` を使用して、読み取るバイト数を制限できます。 `binaryFormat` パラメーターは、制限するバイナリ形式を指定します。 `length` パラメーターは、読み取るバイト数を指定します。 `length` パラメーターでは、数値か、読み取る値の前にある長さの値の形式を指定するバイナリ形式値を指定できます。


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
