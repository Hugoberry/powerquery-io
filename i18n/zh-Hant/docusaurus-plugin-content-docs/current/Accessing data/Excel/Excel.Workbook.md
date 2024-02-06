---
title: Excel.Workbook
---

# Excel.Workbook


傳回 Excel 活頁簿的內容。


## Syntax

```powerquery
Excel.Workbook(
    workbook as binary,
    optional useHeaders as any,
    optional delayTypes as logical
) as table
```


## Remarks

傳回 Excel 活頁簿的內容。    <ul>     <li> <code>useHeaders</code> 可以是 null 或邏輯 (true/false) 值，該邏輯值表示是否應將每個已傳回資料表的第一個資料列視為標頭或選項記錄。預設: false。</li>     <li> <code>delayTypes</code> 可以是 null 或邏輯 (true/false) 值，該邏輯值表示是否應將每個已傳回資料表的資料行保持為不具類型。預設: false。</li>    </ul>    若為 <code>useHeaders</code> 指定記錄 (且 <code>delayTypes</code> 是 null)，則可能提供下列記錄欄位:    <ul>     <li> <code>UseHeaders</code>: 可以是 null 或邏輯 (true/false) 值，該邏輯值表示是否應將每個已傳回資料表的第一個資料列視為標頭。預設: false。</li>     <li> <code>DelayTypes</code>: 可以為 null 或邏輯 (true/false) 值，該邏輯值表示是否應將每個已傳回資料表的資料行保持為不具類型。預設: false。</li>     <li> <code>InferSheetDimensions</code>: 可以是 null 或邏輯 (true/false) 值，該邏輯值表示是否應透過讀取工作表本身來推斷包含資料的工作表區域，而非從檔案讀取維度中繼資料。這在維度中繼資料不正確的情況下相當實用。請注意，只有 Open XML Excel 檔案才支援此選項，舊版 Excel 檔案不予以支援。預設: false。</li>    </ul>    


## Examples

### Example #1 
從 Excel 活頁簿退回 Sheet1 的內容。
```powerquery
Excel.Workbook(File.Contents("C:\Book1.xlsx"), null, true){[Item="Sheet1"]}[Data]
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = "ID", Column2 = "Name", Column3 = "Phone"],
    [Column1 = 1, Column2 = "Bob", Column3 = "123-4567"],
    [Column1 = 3, Column2 = "Pam", Column3 = "543-7890"],
    [Column1 = 2, Column2 = "Jim", Column3 = "987-6543"]
})
```




## Category
Accessing data
