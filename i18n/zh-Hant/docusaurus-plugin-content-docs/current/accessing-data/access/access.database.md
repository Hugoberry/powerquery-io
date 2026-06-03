---
title: Access.Database
---

# Access.Database


傳回 Access 資料庫的結構性代表。


## Syntax

```powerquery
Access.Database(
    database as binary,
    optional options as record
) as table
```


## Remarks

傳回 Access 資料庫 `database` 的結構化表示法。您可指定選擇性的記錄參數 `options` 以控制下列選項:

-   `CreateNavigationProperties` : 邏輯值 (True/False)，設定是否要在傳回的值上產生導覽屬性 (預設為 False)。
-   `NavigationPropertyNameGenerator` : 用於建立導覽屬性名稱的函式。

例如，記錄參數可指定為 \[option1 = value1, option2 = value2...\]。



## Category
Accessing data
