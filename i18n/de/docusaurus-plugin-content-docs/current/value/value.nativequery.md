---
title: Value.NativeQuery
---

# Value.NativeQuery


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


## Remarks

Wertet `query` gegen `target` mithilfe der in `parameters` angegebenen Parameter und der in `options` angegebenen Optionen aus.

Die Ausgabe der Abfrage wird durch `target` definiert.

`target` stellt den Kontext für den durch `query` beschriebenen Vorgang bereit.

`query` beschreibt die für `target` auszuführende Abfrage. `query` wird in einer für `target` spezifischen Art ausgedrückt (z. B. als T-SQL-Anweisung).

Der optionale `parameters`\-Wert kann entweder eine Liste oder einen Datensatz enthalten, um die von `query` erwarteten Parameterwerte bereitzustellen.

Der optionale `options`\-Datensatz kann Optionen enthalten, die sich auf das Ausführungsverhalten von `query` für `target` auswirken. Diese Optionen sind spezifisch für `target`.



## Category
Values
