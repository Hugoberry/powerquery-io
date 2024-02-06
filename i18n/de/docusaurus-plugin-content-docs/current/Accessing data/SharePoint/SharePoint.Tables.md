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

Gibt eine Tabelle zurück, die jeweils eine Zeile für jedes Listenelement enthält, die in der angegebenen SharePoint-Liste "<code>url</code>" gefunden wurde. Jede Zeile enthält Eigenschaften der Liste. "<code>options</code>" kann angegeben werden, um die folgenden Optionen zu steuern:    <ul><li><code>ApiVersion</code> : Nummer (14 oder 15) oder der Text &quot;Auto&quot;, die bzw. der die Version der SharePoint-API angibt, die f&#252;r diese Website verwendet werden soll. Wenn keine Angabe erfolgt, wird die API-Version 14 verwendet. Wenn &quot;Auto&quot; angegeben ist, wird die Serverversion (falls m&#246;glich) automatisch erkannt. Andernfalls wird f&#252;r die Version der Standardwert &quot;14&quot; verwendet. Nicht englischsprachige SharePoint-Websites erfordern mindestens Version 15.</li><li><code>Implementation</code> : Optional. Gibt an, welche Version des SharePoint Connectors verwendet werden soll. Akzeptierte Werte sind &quot;2.0&quot; oder null. Wenn der Wert &quot;2.0&quot; ist, wird die 2.0-Implementierung des SharePoint Connectors verwendet. Wenn der Wert null ist, wird die urspr&#252;ngliche Implementierung des SharePoint-Connectors verwendet.</li><li><code>ViewMode</code> : Optional. Diese Option ist nur f&#252;r die Implementierung 2.0 g&#252;ltig. Akzeptierte Werte sind &quot;Alle&quot; und &quot;Standard&quot;. Wenn kein Wert angegeben wird, wird der Wert auf &quot;Alle&quot; gesetzt. Wenn &quot;Alle&quot; angegeben ist, enth&#228;lt die Ansicht alle vom Benutzer erstellten und systemdefinierten Spalten. Wenn &quot;Standard&quot; angegeben ist, entspricht die Ansicht dem, was der Benutzer sieht, wenn er sich die Liste online in der Ansicht ansieht, die er in seinen Einstellungen als Standardansicht festgelegt hat. Wenn der Benutzer seine Standardansicht bearbeitet, um entweder benutzerdefinierte oder systemdefinierte Spalten hinzuzuf&#252;gen oder zu entfernen, oder wenn er eine neue Ansicht erstellt und diese als Standardansicht einstellt, werden diese &#196;nderungen &#252;ber den Connector &#252;bertragen.</li><li><code>DisableAppendNoteColumns</code> : Verhindert, dass der Connector einen separaten Endpunkt f&#252;r Notizspalten verwendet.</li></ul>    



## Category
Accessing data
