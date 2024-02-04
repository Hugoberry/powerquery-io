---
title: Function.ScalarVector
---

# Function.ScalarVector


## Description

Hiermit wird eine Skalarfunktion basierend auf einer Vektorfunktion erstellt, sodass mehrere Aufrufe in einem Batch zusammengefasst werden.


## Syntax

```powerquery
Function.ScalarVector(
    scalarFunctionType as type,
    vectorFunction as function
) as function
```


## Details

Hiermit wird eine Skalarfunktion vom Typ "<code>scalarFunctionType</code>" zurückgegeben, die "<code>vectorFunction</code>" mit einer einzigen Zeile mit Argumenten aufruft und eine einzelne Ausgabe zurückgibt. Wenn die Skalarfunktion wiederholt auf jede Zeile einer Tabelle mit Eingaben angewendet wird (z. B. "Table.AddColumn"), wird "<code>vectorFunction</code>" stattdessen einmalig für alle Eingaben angewendet.<br />An "<code>vectorFunction</code>" wird eine Tabelle übergeben, deren Spalten im Hinblick auf Name und Position den Parametern von "<code>scalarFunctionType</code>" entsprechen. Jede Zeile dieser Tabelle enthält die Argumente für einen Aufruf der Skalarfunktion, wobei die Spalten den Parametern von "<code>scalarFunctionType</code>" entsprechen.<br />"<code>vectorFunction</code>" muss eine Liste der gleichen Länge zurückgeben wie die Eingabetabelle, deren Element an jeder Position das gleiche Ergebnis aufweisen muss wie die Auswertung der Skalarfunktion für die Eingabezeile derselben Position.<br />Die Eingabetabelle wird als Streamingtabelle vorausgesetzt, deshalb wird für "<code>vectorFunction</code>" erwartet, dass die zugehörige Ausgabe zeitgleich mit dem Empfang der Eingabe gestreamt wird. Hierbei werden die einzelnen Eingabeblöcke nacheinander verarbeitet. Insbesondere darf "<code>vectorFunction</code>" die zugehörige Eingabetabelle nicht mehrfach auflisten.<br />



## Category
Function
