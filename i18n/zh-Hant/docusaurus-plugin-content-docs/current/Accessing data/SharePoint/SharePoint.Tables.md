---
title: SharePoint.Tables
---

# SharePoint.Tables


傳回包含 SharePoint 清單內容的資料表。


## Syntax

```powerquery
SharePoint.Tables(
    url as text,
    optional options as record
) as table
```


## Remarks

傳回資料表，其中的資料列包含在指定的 SharePoint 清單 <code>url</code> 上所發現的每個清單項目。每個資料列都包含清單的屬性。可指定 <code>options</code> 來控制下列選項:    <ul><li><code>ApiVersion</code> : 數字 (14 或 15) 或文字「自動」，其指定用於此網站的 SharePoint API 版本。若未指定，會使用 API 版本 14。指定為「自動」時，在可能的情況下，會自動探索伺服器版本，否則版本預設值為 14。非英文的 SharePoint 網站至少需要版本 15。</li><li><code>Implementation</code> : 選用。指定要使用的 SharePoint 連接器版本。接受的值是 &quot;2.0&quot; 或 Null。如果值為 &quot;2.0&quot;，則會使用 SharePoint 連接器的 2.0 實作。如果值為 Null，則會使用 SharePoint 連接器的原始實作。</li><li><code>ViewMode</code> : 選用。此選項僅對實作 2.0 有效。接受的值是 &quot;All&quot; 和 &quot;Default&quot;。如果未指定任何值，值會設定為 &quot;All&quot;。指定 &quot;All&quot; 時，該檢視會包含所有使用者建立及系統定義的資料行。指定 &quot;Default&quot; 時，該檢視會與使用者在線上查看清單時看到的內容相符，而不論使用者在其設定中設定為預設值的項目為何。如果使用者編輯其預設檢視來新增或移除使用者建立或系統定義的資料行，或建立新的檢視並將其設定為預設值，則這些變更將會傳播到連接器。</li><li><code>DisableAppendNoteColumns</code> : 防止連接器針對備註資料行使用個別端點。</li></ul>    



## Category
Accessing data
