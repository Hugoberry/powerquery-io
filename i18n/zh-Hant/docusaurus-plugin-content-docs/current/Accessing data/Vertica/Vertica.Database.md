---
title: Vertica.Database
---

# Vertica.Database


從 Vertica 匯入資料


## Syntax

```powerquery
Vertica.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

傳回 <code>database</code> 參數所命名之資料庫內，由 <code>server</code> 參數所命名之伺服器上所提供的結構描述資料表。可提供選擇性的記錄參數 <code>options</code>，來指定其他屬性。記錄可包含下列欄位:<ul>    <li><code>ConnectionTimeout</code>: 用於控制在放棄嘗試連線到伺服器之前，所等待的時間。預設值取決於驅動程式。</li>    <li><code>CommandTimeout </code>: 用於控制伺服器端查詢在取消之前，可執行多長時間。預設值取決於驅動程式。</li></ul>


## Examples

### Example #1 
列出 Vertica 中的資料表
```powerquery

```



