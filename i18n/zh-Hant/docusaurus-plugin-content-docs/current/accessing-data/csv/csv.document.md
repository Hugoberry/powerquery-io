---
title: Csv.Document
---

# Csv.Document


以表格方式傳回 CSV 文件的內容。


## Syntax

```powerquery
Csv.Document(
    source as any,
    optional columns as any,
    optional delimiter as any,
    optional extraValues as number,
    optional encoding as TextEncoding.Type
) as table
```


## Remarks

以表格方式傳回 CSV 文件的內容。

-   `columns` 可以是 null、資料行數目、資料行名稱清單、資料表類型或選項記錄。
-   `delimiter` 可以是單一字元、字元清單或值 `""`，表明資料列應以連續空白字元分割。預設值: `","`。
-   有關支援的 `extraValues` 值，請參考 `ExtraValues.Type`。
-   `encoding` 指定文字編碼類型。

如果針對 `columns` 指定一筆記錄 (且 `delimiter`、`extraValues` 和 `encoding` 為 null)，則可能會提供下列記錄欄位:

-   `Delimiter`: 單一字元資料行分隔符號。預設值: `","`。
-   `Columns`: 可以是 null、資料行數目、資料行名稱清單或資料表類型。如果資料行數目低於在輸入中找到的數目，則會忽略其他資料行。如果資料行數目高於在輸入中找到的數目，則其他資料行將為 null。未指定時，資料行數目將取決於在輸入中找到的值。
-   `Encoding`: 檔案的文字編碼。預設值: 65001 (UTF-8)。
-   `CsvStyle`: 指定如何處理引號。
    -   `CsvStyle.QuoteAfterDelimiter` (預設): 欄位中的引號必須緊跟在分隔符號之後才有效。
    -   `CsvStyle.QuoteAlways`: 欄位中的引號無論出現在何處一律有效。
-   `QuoteStyle`: 指定如何處理用引號括起來的分行符號。
    -   `QuoteStyle.Csv` (預設): 將用引號括起來的分行符號視為資料的一部分，而不是目前資料列的結尾。
    -   `QuoteStyle.None`: 將所有分行符號視為目前資料列的結尾，即使它們出現在用引號括起來的值裡。
-   `IncludeByteOrderMark`: 一個邏輯值，表示是否在 CSV 輸出開始時包含位元組順序標記 (BOM)。當設定為 true 時，會寫入 BOM (例如，UTF-8 BOM: `0xEF 0xBB 0xBF`)；當設定為 false 時，則不包含 BOM。此選項僅適用於輸出場景。預設值是 `false`。
-   `ExtraValues`：請參考 `ExtraValues.Type` 以取得支援的 ExtraValues 值。


## Examples

### Example #1
處理具有資料行標頭的 CSV 文字。
```powerquery
let
    csv = Text.Combine({"OrderID,Item", "1,Fishing rod", "2,1 lb. worms"}, "#(cr)#(lf)")
in
    Table.PromoteHeaders(Csv.Document(csv))
```

Result: 
```powerquery
Table.FromRecords({
    [OrderID = "1", Item = "Fishing rod"],
    [OrderID = "2", Item = "1 lb. worms"]
})
```


### Example #2
Process CSV text with multiple delimiter characters. In this example, the third parameter specifies the delimiter pattern `#|#` to use instead of the default.
```powerquery
let
    csv = Text.Combine({"OrderID#|#Color", "1#|#Red", "2#|#Blue"}, "#(cr)#(lf)")
in
    Table.PromoteHeaders(Csv.Document(csv, null, "#|#"))
```

Result: 
```powerquery
Table.FromRecords({
    [OrderID = "1", Color = "Red"],
    [OrderID = "2", Color = "Blue"]
})
```




## Category
Accessing data
