---
title: Odbc.Query
---

# Odbc.Query


傳回在 ODBC 資料來源上執行原生查詢的結果。


## Syntax

```powerquery
Odbc.Query(
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Remarks

使用 ODBC 利用連接字串 <code>connectionString</code>，傳回執行中 <code>query</code> 的結果。<code>connectionString</code> 可以是文字或屬性值組的記錄。屬性值可以是文字或數字。可能會提供您選擇性記錄參數 <code>options</code> 以指定其他屬性。記錄可以包含下列欄位:    <ul><li><code>ConnectionTimeout</code> : 控制在放棄嘗試連線到伺服器之前，要等候的持續時間長度。預設值為 15 秒。</li><li><code>CommandTimeout</code> : 控制伺服器端查詢在取消之前，可以執行的持續時間長度。預設值為十分鐘。</li><li><code>SqlCompatibleWindowsAuth</code> : 邏輯值 (true/false)，判斷是否要為 Windows 驗證產生與 SQL Server 相容的連接字串選項。預設值為 true。</li></ul>


## Examples

### Example #1 
傳回針對提供的連接字串執行簡單查詢的結果。
```powerquery
Odbc.Query("dsn=your_dsn", "select * from Customers")
```

Result: 
```powerquery
table
```




## Category
Accessing data
