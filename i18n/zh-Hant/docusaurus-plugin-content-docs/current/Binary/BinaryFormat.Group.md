---
title: BinaryFormat.Group
---

# BinaryFormat.Group


傳回讀取一組項目的二進位格式。


## Syntax

```powerquery
BinaryFormat.Group(
    binaryFormat as function,
    group as list,
    optional extra as function,
    optional lastKey as any
) as function
```


## Remarks

參數如下:<ul><li><code>binaryFormat</code> 參數可指定索引鍵值的二進位格式。</li><li><code>group</code> 參數可提供已知項目群組的相關資訊。</li><li>選擇性的 <code>extra</code> 參數可用來指定函數，以針對跟在任何索引鍵之後的未預期值傳回二進位格式值。如果未指定 <code>extra</code> 參數，當發現未預期的索引鍵值時將會引發錯誤。</li></ul><code>group</code> 參數指定項目定義的清單。每個項目定義是包含 3-5 個值的清單，如下所示:<ul><li>索引鍵值。對應至項目的索引鍵值。這在項目集合中必須是唯一的。</li><li>項目格式。對應至項目值的二進位格式。這樣可讓每個項目有不同格式。</li><li>項目發生次數。此項目預計會在群組中出現多少次的 <code>BinaryOccurrence.Type</code> 值。必要項目如果沒出現，會造成錯誤。必要或選擇性的重複項目都以類似未預期索引鍵值的方式處理。</li><li>預設項目值 (選擇性)。如果預設項目值出現在項目定義清單中，而且不是 null，就不使用預設值，而改用它。重複或選擇性項目的預設值是 null，而重複值的預設值是空白清單 \{ }。</li><li>項目值轉換 (選擇性)。如果項目值轉換函數出現在項目定義清單中，而且不是 null，系統會在項目值傳回之前呼叫它來轉換項目值。只有當項目出現在輸入中時，才會呼叫轉換函數 (絕不會以預設值呼叫它)。</li></ul>


## Examples

### Example #1 
以下假設索引鍵值是一個位元組，群組中預期有 4 個項目，全部都是索引鍵後面接著一個位元組的資料。項目以下列方式出現在輸入中:&lt;ul&gt;&lt;li&gt;索引鍵 1 是必要項，它的確出現而且值是 11。&lt;/li&gt;&lt;li&gt;索引鍵 2 重複，而且兩次出現的值都是 22，產生值 \{ 22, 22 }。&lt;/li&gt;&lt;li&gt;索引鍵 3 是選擇性的，而且未出現，產生 Null 值。&lt;/li&gt;&lt;li&gt;索引鍵 4 重複，但是未出現，產生 \{ } 值。&lt;/li&gt;&lt;li&gt;索引鍵 5 不是群組的一部分，但是出現一次，值為 55。系統以索引鍵值 5 呼叫額外函數，並傳回對應到該值的格式 (BinaryFormat.Byte)。讀取值 55 並捨棄。&lt;/li&gt;&lt;/ul&gt;
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
以下範例說明項目值轉換和預設項目值。索引鍵 1 的重複項目會使用 List.Sum 加總讀取的值清單。索引鍵 2 的選擇性項目具有預設值 123，而不是 Null。
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
