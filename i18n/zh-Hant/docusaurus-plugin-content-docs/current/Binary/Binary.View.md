---
title: Binary.View
---

# Binary.View


## Description

以使用者定義的處理常式來建立或擴充二進位以進行查詢及動作作業。


## Syntax

```powerquery
Binary.View(
    binary as binary,
    handlers as record
) as binary
```


## Details

傳回 <code>binary</code> 的檢視，其中 <code>handlers</code> 所指定的函式可在將作業套用至檢視時，用於取代預設的作業行為。<br />若有提供 <code>binary</code>，則所有處理常式函式都為選用項目。若未提供 <code>binary</code>，則 <code>GetStream</code> 處理常式函式為必要項目。若沒有為作業指定處理常式函式，就會改為將作業的預設行為套用至 <code>binary</code> (但在 <code>GetExpression</code> 的情況下除外)。<br />處理常式函式傳回的值必須在語意上等同於對 <code>binary</code> (在 <code>GetExpression</code> 的情況下則為產生的檢視) 套用作業的結果。<br />若處理常式函式引發錯誤，就會將預設的作業行為套用至檢視。<br /><code>Binary..View</code> 可用於實作摺疊資料來源 – 將 M 查詢轉譯成來源特定作業 (例如用以下載一個檔案區段)。<br />如需更完整的 <code>Binary.View</code> 描述，請參閱已發佈的 Power Query 自訂連接器文件。<br />


## Examples

### Example #1 
建立不需要存取資料的基本檢視，以判斷長度。
```powerquery
Binary.View(
    null,
    [
        GetLength = () => 12,
        GetStream = () => Text.ToBinary("hello world!")
    ]
)
```

Result: 
```powerquery
Text.ToBinary("hello world!")
```




## Category
Binary
