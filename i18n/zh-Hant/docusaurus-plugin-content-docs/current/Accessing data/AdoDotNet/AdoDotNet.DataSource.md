---
title: AdoDotNet.DataSource
---

# AdoDotNet.DataSource


## Description

傳回 ADO.NET 資料來源的結構描述集合。


## Syntax

```powerquery
AdoDotNet.DataSource(
    providerName as text,
    connectionString as any,
    optional options as record
) as table
```


## Details

傳回提供者名稱為 <code>providerName</code>、連接字串為 <code>connectionString</code> 之 ADO.NET 資料來源的結構描述集合。<code>connectionString</code> 可以是文字或成對的屬性值記錄。屬性值可以是文字或數字。屬性值可以是文字或數字。可提供選擇性的記錄參數 <code>options</code>，以指定其他屬性。記錄可包含下列欄位:    <ul><li><code>CommandTimeout</code> : 控制伺服器端查詢在取消之前，可以執行的持續時間長度。預設值為十分鐘。</li><li><code>SqlCompatibleWindowsAuth</code> : 邏輯值 (true/false)，判斷是否要為 Windows 驗證產生與 SQL Server 相容的連接字串選項。預設值為 true。</li><li><code>TypeMap</code></li></ul>



## Category
Accessing data
