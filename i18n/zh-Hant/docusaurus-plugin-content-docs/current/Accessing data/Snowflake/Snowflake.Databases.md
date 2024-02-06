---
title: Snowflake.Databases
---

# Snowflake.Databases


從 Snowflake 計算倉儲匯入資料。


## Syntax

```powerquery
Snowflake.Databases(
    server as text,
    warehouse as text,
    optional options as record
) as table
```


## Remarks

傳回資料表，列出 <code>server</code> 中 Snowflake Computing <code>warehouse</code> 的資料表。可以指定選擇性的記錄參數 <code>options</code>，以控制下列選項:<ul><li><code>Role</code>: 用作連線角色名稱的文字值。</li><li><code>CreateNavigationProperties</code>: 設定是否在傳回的值上產生導覽屬性的邏輯 (true/false) 值 (預設為 true)。</li><li><code>ConnectionTimeout</code>: 等候 Snowflake 網路回應的秒數。</li><li><code>CommandTimeout</code>: 等候查詢執行的秒數。</li></ul>    


## Examples

### Example #1 
列出 Snowflake 倉儲中的資料表。
```powerquery
Snowflake.Databases("contoso.snowflakecomputing.com", "CONTOSO_WH")
```



