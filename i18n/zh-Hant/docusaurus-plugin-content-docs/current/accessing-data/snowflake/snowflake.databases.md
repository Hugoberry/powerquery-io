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

傳回資料表，列出 `server` 中 Snowflake Computing `warehouse` 的資料表。可以指定選擇性的記錄參數 `options`，以控制下列選項:

-   `Role`: 用作連線角色名稱的文字值。
-   `CreateNavigationProperties`: 設定是否在傳回的值上產生導覽屬性的邏輯 (true/false) 值 (預設為 true)。
-   `ConnectionTimeout`: 等候 Snowflake 網路回應的秒數。
-   `CommandTimeout`: 等候查詢執行的秒數。


## Examples

### Example #1
列出 Snowflake 倉儲中的資料表。
```powerquery
Snowflake.Databases("contoso.snowflakecomputing.com", "CONTOSO_WH")
```



