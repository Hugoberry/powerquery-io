---
title: Odbc.DataSource
---

# Odbc.DataSource


## Description

從 ODBC 資料來源傳回 SQL 表格和檢視的表格。 


## Syntax

```powerquery
Odbc.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Details

從連接字串 <code>connectionString</code> 所指定的 ODBC 資料來源，傳回 SQL 資料表與檢視表的資料表。<code>connectionString</code> 可以是文字或成對的屬性值記錄。屬性值可以是文字或數字。可提供選擇性的記錄參數 <code>options</code>，以指定其他屬性。記錄可包含下列欄位:    <ul><li><code>CreateNavigationProperties</code> : 邏輯值 (True/False)，設定是否要在傳回的值上產生導覽屬性 (預設為 True)。</li><li><code>HierarchicalNavigation</code> : 邏輯值 (True/False)，設定是否要依據資料表的結構描述名稱分組方式，檢視資料表 (預設值為 False)。</li><li><code>ConnectionTimeout</code> : 控制在放棄嘗試連線到伺服器之前，要等候的持續時間長度。預設值為 15 秒。</li><li><code>CommandTimeout</code> : 控制伺服器端查詢在取消之前，可以執行的持續時間長度。預設值為十分鐘。</li><li><code>SqlCompatibleWindowsAuth</code> : 邏輯值 (true/false)，判斷是否要為 Windows 驗證產生與 SQL Server 相容的連接字串選項。預設值為 true。</li></ul>


## Examples

### Example #1 
從提供的連接字串傳回 SQL 資料表和檢視。
```powerquery
Odbc.DataSource("dsn=your_dsn")
```

Result: 
```powerquery
table
```




## Category
Accessing data
