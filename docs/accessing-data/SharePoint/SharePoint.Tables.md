---
title: SharePoint.Tables
---

# SharePoint.Tables


Returns a table containing content from a SharePoint List.


## Syntax

```powerquery
SharePoint.Tables(
    url as text,
    optional options as record
) as table
```


## Remarks

Returns a table containing a row for each List item found at the specified SharePoint list, <code>url</code>. Each row contains properties of the List. <code>options</code> may be specified to control the following options:    <ul><li><code>ApiVersion</code> : A number (14 or 15) or the text &quot;Auto&quot; that specifies the SharePoint API version to use for this site. When not specified, API version 14 is used. When Auto is specified, the server version will be automatically discovered if possible, otherwise version defaults to 14. Non-English SharePoint sites require at least version 15.</li><li><code>Implementation</code> : Optional. Specifies which version of the SharePoint connector to use. Accepted values are &quot;2.0&quot; or null. If the value is &quot;2.0&quot;, the 2.0 implementation of the SharePoint connector is used. If the value is null, the original implementation of the SharePoint connector is used.</li><li><code>ViewMode</code> : Optional. This option is only valid for implementation 2.0. Accepted values are &quot;All&quot; and &quot;Default&quot;. If no value is specified, the value is set to &quot;All&quot;. When &quot;All&quot; is specified, the view includes all user-created and system-defined columns. When &quot;Default&quot; is specified, the view will match what the user sees when looking at the list online in whichever view that user set as Default in their settings. If the user edits their default view to add or remove either user-created or system-defined columns, or by creating a new view and setting it as default, these changes will propagate through the connector.</li><li><code>DisableAppendNoteColumns</code> : Prevents the connector from using a separate endpoint for note columns.</li></ul>    



## Category
Accessing data
