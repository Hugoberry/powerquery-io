---
title: AzureStorage.Tables
---

# AzureStorage.Tables


## Description

傳回導覽表格，內含在 Azure 儲存庫的指定帳戶中找到的資料表。


## Syntax

```powerquery
AzureStorage.Tables(
    account as text,
    optional options as record
) as table
```


## Details

傳回導覽表格，其中的每一個資料列，各包含一個在 Azure 儲存體保存庫之帳戶 URL <code>account</code> 中找到的資料表。每個資料列都包含 Azure 資料表的連結。您可以提供選擇性記錄參數 <code>options</code>，以指定其他屬性。記錄可以包含下列欄位:    <ul><li><code>Timeout</code> : 控制在放棄對伺服器提出的要求之前，要等候的持續時間長度。預設值依來源而定。</li></ul>



## Category
Accessing data
