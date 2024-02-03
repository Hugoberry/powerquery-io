---
title: Parquet.Document
---

# Parquet.Document


## Description

以資料表形式傳回 Parquet 文件的內容。


## Syntax

```powerquery
Parquet.Document(
    binary as binary,
    optional options as record
) as any
```


## Details

以資料表形式傳回 Parquet 文件的內容。選項包括:
    <ul>
    <li> <code>TypeMapping</code> : 用於控制讀取和寫入檔案時之預設類型對應的文字值。預設值為 null，並嘗試盡可能保持原始類型的逼真度。值  "Sql" 將產生與 Sql Server 最相容的結果。</li>
    </ul>



## Category
存取資料
