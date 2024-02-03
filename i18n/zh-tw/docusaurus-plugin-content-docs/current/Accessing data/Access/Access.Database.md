---
title: Access.Database
---

# Access.Database


## Description

傳回 Access 資料庫的結構性代表。


## Syntax

```powerquery
Access.Database(
    database as binary,
    optional options as record
) as table
```


## Details

傳回 Access 資料庫 <code>database</code> 的結構化表示法。可指定選擇性的記錄參數 <code>options</code>，來控制下列選項:    <ul><li><code>CreateNavigationProperties</code> : 邏輯值 (True/False)，設定是否要在傳回的值上產生導覽屬性 (預設為 False)。</li><li><code>NavigationPropertyNameGenerator</code> : 用於建立導覽屬性名稱的函式。</li></ul>    例如，記錄參數可指定為 [option1 = value1, option2 = value2...]。



## Category
Accessing data
