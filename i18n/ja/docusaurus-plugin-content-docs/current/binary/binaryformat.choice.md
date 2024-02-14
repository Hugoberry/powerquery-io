---
title: BinaryFormat.Choice
---

# BinaryFormat.Choice


既に読み取られた値に基づいて次のバイナリ形式を選択するバイナリ形式を返します。


## Syntax

```powerquery
BinaryFormat.Choice(
    binaryFormat as function,
    chooseFunction as function,
    optional type as type,
    optional combineFunction as function
) as function
```


## Remarks

既に読み取られた値に基づいて次のバイナリ形式を選択するバイナリ形式を返します。この関数によって生成されるバイナリ形式の値は、以下のステージで機能します。<ul><li><code>binaryFormat</code> パラメーターで指定されたバイナリ形式が、値を読み取るために使用されます。</li><li><code>chooseFunction</code> パラメーターで指定された選択関数に値が渡されます。</li><li>選択関数は値を調べ、2 番目のバイナリ形式を返します。</li><li>2 番目のバイナリ形式が、2 番目の値を読み取るために使用されます。</li><li>結合関数を指定した場合は、最初の値と 2 番目の値が結合関数に渡され、結果値が返されます。</li><li>結合関数が指定されない場合は、2 番目の値が返されます。</li><li>2 番目の値が返されます。</li></ul>省略可能な <code>type</code> パラメーターは、選択関数から返されるバイナリ形式の種類を示します。指定できる値は、<code>type any</code>、<code>type list</code>、または <code>type binary</code> です。<code>type</code> パラメーターが指定されない場合は、<code>type any</code> が使用されます。<code>type list</code> または <code>type binary</code> が使用されると、システムはバッファー処理された値ではなく、ストリーミングの <code>binary</code> または <code>list</code> の値を返せる場合があります。そうすることで、形式を読み取るために必要なメモリの量を減らすことができます。


## Examples

### Example #1 
バイトのリストを読み取ります。要素の数は最初のバイトによって決まります。
```powerquery
let
    binaryData = #binary({2, 3, 4, 5}),
    listFormat = BinaryFormat.Choice(
        BinaryFormat.Byte,
        (length) => BinaryFormat.List(BinaryFormat.Byte, length)
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{3, 4}
```


### Example #2 
バイトのリストを読み取ります。要素の数は最初のバイトによって決まり、読み取られた最初のバイトは保持されます。
```powerquery
let
    binaryData = #binary({2, 3, 4, 5}),
    listFormat = BinaryFormat.Choice(
        BinaryFormat.Byte,
        (length) => BinaryFormat.Record([
            length = length,
            list = BinaryFormat.List(BinaryFormat.Byte, length)
        ])
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
[length = 2, list = {3, 4}]
```


### Example #3 
バイトのリストを読み取ります。要素の数は最初のバイトによって決まり、ストリーミング リストが使用されます。
```powerquery
let
    binaryData = #binary({2, 3, 4, 5}),
    listFormat = BinaryFormat.Choice(
        BinaryFormat.Byte,
        (length) => BinaryFormat.List(BinaryFormat.Byte, length),
        type list
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{3, 4}
```




## Category
Binary Formats.Controlling what comes next
