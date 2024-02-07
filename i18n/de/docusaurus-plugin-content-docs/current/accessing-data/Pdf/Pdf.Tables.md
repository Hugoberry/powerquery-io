---
title: Pdf.Tables
---

# Pdf.Tables


Gibt alle Tabellen zurück, die in einer PDF-Datei gefunden wurden.


## Syntax

```powerquery
Pdf.Tables(
    pdf as binary,
    optional options as record
) as table
```


## Remarks

Gibt Tabellen zurück, die in "<code>pdf</code>" gefunden wurden. Ein optionaler Datensatzparameter "<code>options</code>" kann angegeben werden, um zusätzliche Eigenschaften festzulegen. Der Datensatz kann die folgenden Felder enthalten:    <ul><li><code>Implementation</code> : Die Version des Algorithmus, die beim Identifizieren von Tabellen verwendet werden soll. Alte Versionen stehen nur zur Gew&#228;hrleistung von Abw&#228;rtskompatibilit&#228;t zur Verf&#252;gung, damit alte Abfragen nicht durch Algorithmus-Updates ung&#252;ltig werden. Die neueste Version sollte immer die besten Ergebnisse liefern. G&#252;ltige Werte sind „1.3“, „1.2“, „1.1“ oder NULL.</li><li><code>StartPage</code> : Hiermit wird die erste Seite im zu untersuchenden Seitenbereich angegeben. Standardwert: 1.</li><li><code>EndPage</code> : Hiermit wird die letzte Seite im zu untersuchenden Seitenbereich angegeben. Standardwert: die letzte Seite im Dokument.</li><li><code>MultiPageTables</code> : Hiermit wird gesteuert, ob &#228;hnliche Tabellen auf aufeinanderfolgenden Seiten automatisch in einer einzigen Tabelle kombiniert werden. Standardwert: TRUE.</li><li><code>EnforceBorderLines</code> : Hiermit wird gesteuert, ob Rahmenlinien immer als Zellbegrenzungen erzwungen (sofern TRUE) oder nur als ein Hinweis unter vielen zum Bestimmen von Zellbegrenzungen (sofern FALSE) verwendet werden. Standardwert: FALSE.</li></ul>    


## Examples

### Example #1 
Hiermit werden die in &#34;sample.pdf&#34; enthaltenen Tabellen zurückgegeben.
```powerquery
Pdf.Tables(File.Contents("c:\sample.pdf"))
```

Result: 
```powerquery
#table({"Name", "Kind", "Data"}, ...)
```




## Category
Datenzugriff
