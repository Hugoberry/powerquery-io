---
title: SharePoint.Files
---

# SharePoint.Files


Gibt eine Tabelle mit Dokumenten einer SharePoint-Website zurück.


## Syntax

```powerquery
SharePoint.Files(
    url as text,
    optional options as record
) as table
```


## Remarks

Gibt eine Tabelle zurück, die jeweils eine Zeile pro Dokument enthält, das in der angegebenen SharePoint-Website "`url`" gefunden wurde (Unterordner eingeschlossen). Jede Zeile enthält Eigenschaften des Ordners bzw. der Datei sowie einen Link zum jeweiligen Inhalt. "`options`" kann angegeben werden, um die folgenden Optionen zu steuern:

-   `ApiVersion` : Nummer (14 oder 15) oder der Text "Auto", die bzw. der die Version der SharePoint-API angibt, die für diese Website verwendet werden soll. Wenn keine Angabe erfolgt, wird die API-Version 14 verwendet. Wenn "Auto" angegeben ist, wird die Serverversion (falls möglich) automatisch erkannt. Andernfalls wird für die Version der Standardwert "14" verwendet. Nicht englischsprachige SharePoint-Websites erfordern mindestens Version 15.



## Category
Accessing data
