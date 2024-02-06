---
title: Pdf.Tables
---

# Pdf.Tables


傳回 PDF 檔案中找到的任何資料表。


## Syntax

```powerquery
Pdf.Tables(
    pdf as binary,
    optional options as record
) as table
```


## Remarks

傳回在 <code>pdf</code> 中找到的所有資料表。可提供選擇性記錄參數 <code>options</code> 來指定其他屬性。記錄可包含下列欄位:    <ul><li><code>Implementation</code> : 識別資料表時所要使用的演算法版本。舊版本僅供回溯相容性使用，以防止舊的查詢因演算法更新而中斷。最新版本應一律提供最佳結果。有效值為 「1.3」、「1.2」、「1.1」或 null。</li><li><code>StartPage</code> : 指定要檢查之頁面範圍的第一頁。預設: 1。</li><li><code>EndPage</code> : 指定要檢查之頁面範圍的最後一頁。預設: 文件的最後一頁。</li><li><code>MultiPageTables</code> : 控制連續頁面上的類似表格是否要自動合併成單一表格。預設: true。</li><li><code>EnforceBorderLines</code> : 控制永遠強制使用框線作為儲存格邊界 (若為 true)，或單純用來作為其中一個決定儲存格邊界的提示 (若為 false)。預設: false。</li></ul>    


## Examples

### Example #1 
傳回 sample.pdf 中包含的資料表。
```powerquery
Pdf.Tables(File.Contents("c:\sample.pdf"))
```

Result: 
```powerquery
#table({"Name", "Kind", "Data"}, ...)
```




## Category
正在存取資料
