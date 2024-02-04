---
title: Value.NativeQuery
---

# Value.NativeQuery


## Description

Hiermit wird eine Abfrage für ein Ziel ausgewertet.


## Syntax

```powerquery
Value.NativeQuery(
    target as any,
    query as text,
    optional parameters as any,
    optional options as record
) as any
```


## Details

Wertet <code>query</code> gegen <code>target</code> mithilfe der in <code>parameters</code> angegebenen Parameter und der in <code>options</code> angegebenen Optionen aus.<br />Die Ausgabe der Abfrage wird durch <code>target</code> definiert.<br /><code>target</code> stellt den Kontext für den durch <code>query</code> beschriebenen Vorgang bereit.<br /><code>query</code> beschreibt die für <code>target</code> auszuführende Abfrage. <code>query</code> wird in einer für <code>target</code> spezifischen Art ausgedrückt (z. B. als T-SQL-Anweisung).<br />Der optionale <code>parameters</code>-Wert kann entweder eine Liste oder einen Datensatz enthalten, um die von <code>query</code> erwarteten Parameterwerte bereitzustellen.<br />Der optionale <code>options</code>-Datensatz kann Optionen enthalten, die sich auf das Ausführungsverhalten von <code>query</code> für <code>target</code> auswirken. Diese Optionen sind spezifisch für <code>target</code>.<br />



## Category
Values
