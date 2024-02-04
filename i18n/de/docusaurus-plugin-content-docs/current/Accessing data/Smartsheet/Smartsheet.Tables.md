---
title: Smartsheet.Tables
---

# Smartsheet.Tables


## Description

Gibt eine Tabelle mit Arbeitsblättern, Berichten, Ordnern und Arbeitsbereichen aus der Smartsheet-API zurück.


## Syntax

```powerquery
Smartsheet.Tables(

) as table
```


## Details

Gibt eine geschachtelte Tabelle der verfügbaren Arbeitsblätter, Ordner und Arbeitsbereiche aus der Smartsheet-API zurück.


## Examples

### Example #1 
Gibt Arbeitsblätter, Ordner, Berichte und Arbeitsbereiche zurück, die auf der obersten Ebene der Smartsheet-Hierarchie verfügbar sind.
```powerquery
Smartsheet.Tables()
```

Result: 
```powerquery
Eine Tabelle mit Ordnern, Berichten und Arbeitsbereichen der obersten Ebene der Smartsheet-Hierarchie
```



