---
title: Binary.InferContentType
---

# Binary.InferContentType


## Description

Liest den binären Datenstrom und versucht, den Inhaltstyp und die Formatinformationen des Datenstroms zu ermitteln.


## Syntax

```powerquery
Binary.InferContentType(
    source as binary
) as record
```


## Details

Gibt einen Datensatz mit dem Feld "Content.Type" zurück, das den abgeleiteten MIME-Typ enthält.    Wenn der abgeleitete Inhaltstyp "text/\*" lautet und eine Codierungscodepage erkannt wird, wird zusätzlich das Feld "Content.Encoding" mit der Codierung des Datenstroms zurückgegeben.    Wenn der abgeleitete Inhaltstyp "text/csv" lautet und ein Format mit Trennzeichen vorliegt, wird außerdem das Feld "Csv.PotentialDelimiter" zurückgegeben, das eine Tabelle für die Analyse möglicher Trennzeichen enthält.    Wenn der abgeleitete Inhaltstyp "text/csv" lautet und ein Format mit fester Breite vorliegt, wird außerdem das Feld "Csv.PotentialPositions" zurückgegeben, das eine Liste für die Analyse der potenziellen Spaltenpositionen bei fester Breite enthält.



## Category
Binary
