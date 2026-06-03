---
title: SharePoint.Contents
---

# SharePoint.Contents


傳回包含 SharePoint 網站內容的資料表。


## Syntax

```powerquery
SharePoint.Contents(
    url as text,
    optional options as record
) as table
```


## Remarks

傳回資料表，其中的資料列包含在指定的 SharePoint 網站 `url` 上所發現的每個資料夾。每個資料列都包含資料夾或檔案的屬性，以及其內容的連結。可指定 `options` 來控制下列選項:

-   `ApiVersion` : 數字 (14 或 15) 或文字「自動」，其指定用於此網站的 SharePoint API 版本。若未指定，會使用 API 版本 14。指定為「自動」時，在可能的情況下，會自動探索伺服器版本，否則版本預設值為 14。非英文的 SharePoint 網站至少需要版本 15。
-   `Implementation` : 選用。指定要使用的 SharePoint 連接器版本。接受的值是 "2.0" 或 Null。如果值為 "2.0"，則會使用 SharePoint 連接器的 2.0 實作。如果值為 Null，則會使用 SharePoint 連接器的原始實作。



## Category
Accessing data
