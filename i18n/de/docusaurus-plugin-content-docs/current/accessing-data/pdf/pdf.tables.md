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

Gibt Tabellen zurück, die in "`pdf`" gefunden wurden. Ein optionaler Datensatzparameter "`options`" kann angegeben werden, um zusätzliche Eigenschaften festzulegen. Der Datensatz kann die folgenden Felder enthalten:

-   `Implementation` : Die Version des Algorithmus, die beim Identifizieren von Tabellen verwendet werden soll. Alte Versionen stehen nur zur Gewährleistung von Abwärtskompatibilität zur Verfügung, damit alte Abfragen nicht durch Algorithmus-Updates ungültig werden. Die neueste Version sollte immer die besten Ergebnisse liefern. Gültige Werte sind „1.3“, „1.2“, „1.1“ oder NULL.
-   `StartPage` : Hiermit wird die erste Seite im zu untersuchenden Seitenbereich angegeben. Standardwert: 1.
-   `EndPage` : Hiermit wird die letzte Seite im zu untersuchenden Seitenbereich angegeben. Standardwert: die letzte Seite im Dokument.
-   `MultiPageTables` : Hiermit wird gesteuert, ob ähnliche Tabellen auf aufeinanderfolgenden Seiten automatisch in einer einzigen Tabelle kombiniert werden. Standardwert: TRUE.
-   `EnforceBorderLines` : Hiermit wird gesteuert, ob Rahmenlinien immer als Zellbegrenzungen erzwungen (sofern TRUE) oder nur als ein Hinweis unter vielen zum Bestimmen von Zellbegrenzungen (sofern FALSE) verwendet werden. Standardwert: FALSE.


## Examples

### Example #1
Hiermit werden die in "sample.pdf" enthaltenen Tabellen zurückgegeben.
```powerquery
Pdf.Tables(File.Contents("c:\sample.pdf"))
```

Result: 
```powerquery
#table({"Name", "Kind", "Data"}, ...)
```




## Category
Datenzugriff
