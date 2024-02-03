---
title: BinaryFormat.Group
---

# BinaryFormat.Group


## Description

アイテムのグループを読み取るバイナリ形式を返します。


## Syntax

```powerquery
BinaryFormat.Group(
    binaryFormat as function,
    group as list,
    optional extra as function,
    optional lastKey as any
) as function
```


## Details

パラメーターは次のとおりです:<ul><li> <code>binaryFormat</code> パラメーターは、キー値のバイナリ形式を指定します。</li><li><code>group</code> パラメーターは、既知のアイテムのグループに関する情報を提供します。</li><li>省略可能な <code>extra</code> パラメーターは、予期されていない任意のキーに続く値のバイナリ形式値を返す関数を指定するために使用されます。<code>extra</code> パラメーターが指定されていない場合、予期しないキー値があると、エラーが発生します。</li></ul><code>group</code> パラメーターは、アイテム定義のリストを指定します。各アイテム定義は、次のとおり、3 ～ 5 個の値を含むリストです:<ul><li>キー値。アイテムに対応するキーの値です。アイテムのセット内で一意である必要があります。</li><li>アイテムの形式。アイテムの値に対応するバイナリ形式です。これにより、各アイテムは別の形式でもかまいません。</li><li>アイテムの出現。アイテムがグループ内で出現する見込みの回数を示す <code>BinaryOccurrence.Type</code> 値です。必須アイテムがないと、エラーが発生します。必須または省略可能な重複アイテムは予期しないキー値と同様に扱われます。</li><li>既定のアイテム値 (省略可能)。既定のアイテム値がアイテム定義リストにあり、NULL ではない場合は、既定値の代わりに使用されます。繰り返しアイテムまたは省略可能なアイテムの既定値が NULL の場合、繰り返し値の既定値は空のリスト \{ } になります。</li><li>アイテム値の変換 (省略可能)。アイテム値の変換関数がアイテム定義リストに存在し、NULL ではない場合は、その関数が呼び出され、アイテム値が変換されてから返されます。変換関数が呼びされるのは、アイテムが入力内にある場合のみです (既定値では呼び出されません)。</li></ul>


## Examples

### Example #1 
以下は、シングル バイトのキー値 (グループ内に 4 つのアイテムが予期され、それぞれがキーに続く 1 バイトの値を持つ) を想定しています。アイテムは、入力では次のようになります:&lt;ul&gt;&lt;li&gt;キー 1 は必須で、値 11 と共に表示されます。&lt;/li&gt;&lt;li&gt;キー 2 は繰り返され、値 22 と共に 2 回表示されて、結果は \{ 22, 22 } という値になります。&lt;/li&gt;&lt;li&gt;キー 3 は省略可能で、表示されず、結果は NULL 値になります。&lt;/li&gt;&lt;li&gt;キー 4 は繰り返されますが、表示されず、結果は \{ } という値になります。&lt;/li&gt;&lt;li&gt;キー 5 はグループには含まれませんが、値 55 と共に 1 回表示されます。追加の関数がキー値 5 で呼び出され、その値に対応する形式が返されます (BinaryFormat.Byte)。値 55 は読み取られた後、破棄されます。&lt;/li&gt;&lt;/ul&gt;
```powerquery
let
    b = #binary({
        1, 11,
        2, 22,
        2, 22,
        5, 55,
        1, 11
    }),
    f = BinaryFormat.Group(
        BinaryFormat.Byte,
        {
            {1, BinaryFormat.Byte, BinaryOccurrence.Required},
            {2, BinaryFormat.Byte, BinaryOccurrence.Repeating},
            {3, BinaryFormat.Byte, BinaryOccurrence.Optional},
            {4, BinaryFormat.Byte, BinaryOccurrence.Repeating}
        },
        (extra) => BinaryFormat.Byte
    )
in
    f(b)
```

Result: 
```powerquery
{11, {22, 22}, null, {}}
```


### Example #2 
次の例は、アイテム値の変換と既定のアイテム値を示しています。キー 1 の繰り返しアイテムは、List.Sum を使用して読み取られた一連の値を合計します。キー 2 の省略可能なアイテムは、NULL ではなく既定値の 123 を持ちます。
```powerquery
let
    b = #binary({
        1, 101,
        1, 102
    }),
    f = BinaryFormat.Group(
        BinaryFormat.Byte,
        {
            {1, BinaryFormat.Byte, BinaryOccurrence.Repeating,
              0, (list) => List.Sum(list)},
            {2, BinaryFormat.Byte, BinaryOccurrence.Optional, 123}
        }
    )
in
    f(b)
```

Result: 
```powerquery
{203, 123}
```




## Category
Binary Formats.Reading a group of items
