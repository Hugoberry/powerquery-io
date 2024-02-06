---
title: BinaryFormat.Group
---

# BinaryFormat.Group


返回读取一组项的二进制格式。


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

参数如下所示:<ul><li><code>binaryFormat</code> 参数指定键值的二进制格式。</li><li><code>group</code> 参数提供与已知项的组有关的信息。</li><li>可选的 <code>extra</code> 参数可用于指定一个函数，该函数将为跟随在任何意外的键之后的值返回一个二进制格式值。如果未指定 <code>extra</code> 参数，则在存在意外的键值时会引发错误。</li></ul><code>group</code> 参数指定项定义的列表。每个项定义都是一个列表，包含 3-5 个值，如下所示:<ul><li>键值。与项相对应的键的值。该值在项组内必须唯一。</li><li>项格式。与项的值相对应的二进制格式。其允许每个项都具有不同的格式。</li><li>项出现次数。针对该项应在组中出现多少次的 <code>BinaryOccurrence.Type</code> 值。如果必需的项未提供，将会导致错误。像对待意外键值一样处理必需的或可选的重复项。</li><li>默认项值(可选)。如果默认项值出现在项定义列表中并且不为 Null，将使用默认项值而非默认值。重复或可选项的默认值为 Null，而重复值的默认值为空列表 \{ }。</li><li>项值转换(可选)。如果在项定义列表中提供了项值转换函数并且不为 Null，将调用该函数以便转换该项值，然后才能返回它。只有在该项出现在输入中的情况下才调用该转换函数(将永远不会用默认值调用它)。</li></ul>


## Examples

### Example #1 
下面假定一个键值，它是单字节的，在组中应该有 4 个项，并且所有这些项都在该键后有一个数据字节。 这些项按如下所示出现在输入中:&lt;ul&gt;&lt;li&gt;键 1 是必需的，并且与值 11 一起出现。&lt;/li&gt;&lt;li&gt;键 2 重复，与值 22 一起出现两次，并且导致值\{ 22, 22 }。&lt;/li&gt;&lt;li&gt;键 3 是可选的，它不出现，并且导致 Null 值。&lt;/li&gt;&lt;li&gt;键 4 重复，但不出现，并且导致值 \{ }。&lt;/li&gt;&lt;li&gt;键 5 不是该组的一部分，但与值 55 一起出现一次。 使用键值 5 调用该附加函数，并且返回与该值相对应的格式(BinaryFormat.Byte)。 值 55 被读取和放弃。&lt;/li&gt;&lt;/ul&gt;
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
下面的示例说明项值转换和默认项值。  具有键 1 的重复项使用 List.Sum 对读取的值列表进行求和。 具有键 2 的可选项具有默认值 123，而非 Null。
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
