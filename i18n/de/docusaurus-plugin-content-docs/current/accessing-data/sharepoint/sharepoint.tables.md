---
title: SharePoint.Tables
---

# SharePoint.Tables


Gibt eine Tabelle mit dem Inhalt einer SharePoint-Liste zurück.


## Syntax

```powerquery
SharePoint.Tables(
    url as text,
    optional options as record
) as table
```


## Remarks

Gibt eine Tabelle zurück, die jeweils eine Zeile für jedes Listenelement enthält, die in der angegebenen SharePoint-Liste "`url`" gefunden wurde. Jede Zeile enthält Eigenschaften der Liste. "`options`" kann angegeben werden, um die folgenden Optionen zu steuern:

-   `ApiVersion` : Nummer (14 oder 15) oder der Text "Auto", die bzw. der die Version der SharePoint-API angibt, die für diese Website verwendet werden soll. Wenn keine Angabe erfolgt, wird die API-Version 14 verwendet. Wenn "Auto" angegeben ist, wird die Serverversion (falls möglich) automatisch erkannt. Andernfalls wird für die Version der Standardwert "14" verwendet. Nicht englischsprachige SharePoint-Websites erfordern mindestens Version 15.
-   `Implementation` : Optional. Gibt an, welche Version des SharePoint Connectors verwendet werden soll. Akzeptierte Werte sind "2.0" oder null. Wenn der Wert "2.0" ist, wird die 2.0-Implementierung des SharePoint Connectors verwendet. Wenn der Wert null ist, wird die ursprüngliche Implementierung des SharePoint-Connectors verwendet.
-   `ViewMode` : Optional. Diese Option ist nur für die Implementierung 2.0 gültig. Akzeptierte Werte sind "Alle" und "Standard". Wenn kein Wert angegeben wird, wird der Wert auf "Alle" gesetzt. Wenn "Alle" angegeben ist, enthält die Ansicht alle vom Benutzer erstellten und systemdefinierten Spalten. Wenn "Standard" angegeben ist, entspricht die Ansicht dem, was der Benutzer sieht, wenn er sich die Liste online in der Ansicht ansieht, die er in seinen Einstellungen als Standardansicht festgelegt hat. Wenn der Benutzer seine Standardansicht bearbeitet, um entweder benutzerdefinierte oder systemdefinierte Spalten hinzuzufügen oder zu entfernen, oder wenn er eine neue Ansicht erstellt und diese als Standardansicht einstellt, werden diese Änderungen über den Connector übertragen.
-   `DisableAppendNoteColumns` : Verhindert, dass der Connector einen separaten Endpunkt für Notizspalten verwendet.



## Category
Accessing data
