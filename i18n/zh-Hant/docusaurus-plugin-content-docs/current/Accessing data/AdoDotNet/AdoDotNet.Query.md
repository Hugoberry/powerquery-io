---
title: AdoDotNet.Query
---

# AdoDotNet.Query


傳回在 ADO.NET 資料來源上執行原生查詢的結果。


## Syntax

```powerquery
AdoDotNet.Query(
    providerName as text,
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Remarks

使用 ADO.NET 提供者 <code>providerName</code> 利用連接字串 <code>connectionString</code>，傳回執行中 <code>query</code> 的結果。<code>connectionString</code> 可以是文字或成對的屬性值記錄。屬性值可以是文字或數字。可提供選擇性的記錄參數 <code>options</code>，以指定其他屬性。記錄可包含下列欄位:    <ul><li><code>CommandTimeout</code> : 控制伺服器端查詢在取消之前，可以執行的持續時間長度。預設值為十分鐘。</li><li><code>SqlCompatibleWindowsAuth</code> : 邏輯值 (true/false)，判斷是否要為 Windows 驗證產生與 SQL Server 相容的連接字串選項。預設值為 true。</li></ul>



## Category
Accessing data
