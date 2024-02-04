---
title: Parquet.Document
---

# Parquet.Document


## Description

Gibt den Inhalt des Parquet-Dokuments als Tabelle zurück.


## Syntax

```powerquery
Parquet.Document(
    binary as binary,
    optional options as record
) as any
```


## Details

Gibt den Inhalt des Parquet-Dokuments als Tabelle zurück. Zu den Optionen gehören:    <ul>    <li> <code>TypeMapping</code>: Ein Textwert, der die Standardtypzuordnung beim Lesen und Schreiben von Dateien steuert. Der Standardwert ist NULL. Damit wird versucht, für den ursprünglichen Typ eine möglichst große Originaltreue beizubehalten. Der Wert „Sql“ erzeugt Ergebnisse, die am besten mit SQL Server kompatibel sind.</li>    </ul>



## Category
Datenzugriff
