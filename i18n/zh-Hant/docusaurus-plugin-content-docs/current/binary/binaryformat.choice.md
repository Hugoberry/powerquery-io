---
title: BinaryFormat.Choice
---

# BinaryFormat.Choice


傳回二進位格式，此格式會根據已讀取的值選擇下一個二進位格式。


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

傳回二進位格式，此格式會根據已讀取的值選擇下一個二進位格式。這個函數所產生的二進位格式值會分階段運作:

-   系統使用 `binaryFormat` 參數所指定的二進位格式讀取值。
-   值傳遞到 `chooseFunction` 參數所指定的選擇函數。
-   選擇函數檢查值，並傳回第二個二進位格式。
-   系統使用第二個二進位格式讀取第二個值。
-   如果指定了組合函數，第一個和第二個值會傳遞到組合函數，然後傳回結果值。
-   如果未指定組合函數，則傳回第二個值。
-   傳回第二個值。

選擇性的 `type` 參數指示選擇函數將會傳回的二進位格式類型。您可以指定 `type any`、`type list` 或 `type binary`。如果未指定 `type` 參數，即使用 `type any`。如果使用 `type list` 或 `type binary`，則系統可以傳回資料流 `binary` 或 `list` 值，而不是緩衝的值，這樣可以減少讀取格式所需的記憶體數量。


## Examples

### Example #1
讀取位元組清單，其項目數由第一個位元組決定。
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
讀取位元組清單，其項目數由第一個位元組決定，而且會保留讀取的第一個位元組。
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
讀取一連串位元組，其項目數由第一個位元組使用資料流清單來決定。
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
