---
title: BinaryFormat.List
---

# BinaryFormat.List


Returns a binary format that reads a sequence of items and returns a list.


## Syntax

```powerquery
BinaryFormat.List(
    binaryFormat as function,
    optional countOrCondition as any
) as function
```


## Remarks

Returns a binary format that reads a sequence of items and returns a <code>list</code>.  The <code>binaryFormat</code> parameter specifies the binary format of each item.  There are three ways to determine the number of items read: <ul><li>If the <code>countOrCondition</code> is not specified, then the binary format will read until there are no more items.</li><li>If the <code>countOrCondition</code> is a number, then the binary format will read that many items.</li><li>If the <code>countOrCondition</code> is a function, then that function will be invoked for each item read.  The function returns true to continue, and false to stop reading items.  The final item is included in the list.</li><li>If the <code>countOrCondition</code> is a binary format, then the count of items is expected to precede the list, and the specified format is used to read the count.</li></ul>


## Examples

### Example #1 
Read bytes until the end of the data.
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
Read two bytes.
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
Read bytes until the byte value is greater than or equal to two.
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
