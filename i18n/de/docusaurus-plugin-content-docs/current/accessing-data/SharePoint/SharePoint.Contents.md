---
title: SharePoint.Contents
---

# SharePoint.Contents


Gibt eine Tabelle mit Inhalten einer SharePoint-Website zurück.


## Syntax

```powerquery
SharePoint.Contents(
    url as text,
    optional options as record
) as table
```


## Remarks

Gibt eine Tabelle zurück, die jeweils eine Zeile pro Ordner und Dokument enthält, der bzw. das in der angegebenen SharePoint-Website "<code>url</code>" gefunden wurde. Jede Zeile enthält Eigenschaften des Ordners bzw. der Datei sowie einen Link zum jeweiligen Inhalt. "<code>options</code>" kann angegeben werden, um die folgenden Optionen zu steuern:    <ul><li><code>ApiVersion</code> : Nummer (14 oder 15) oder der Text &quot;Auto&quot;, die bzw. der die Version der SharePoint-API angibt, die f&#252;r diese Website verwendet werden soll. Wenn keine Angabe erfolgt, wird die API-Version 14 verwendet. Wenn &quot;Auto&quot; angegeben ist, wird die Serverversion (falls m&#246;glich) automatisch erkannt. Andernfalls wird f&#252;r die Version der Standardwert &quot;14&quot; verwendet. Nicht englischsprachige SharePoint-Websites erfordern mindestens Version 15.</li></ul>    



## Category
Accessing data
