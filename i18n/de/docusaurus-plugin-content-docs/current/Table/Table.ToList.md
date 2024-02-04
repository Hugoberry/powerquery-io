---
title: Table.ToList
---

# Table.ToList


## Description

Konvertiert eine Tabelle in eine Liste, indem die angegebene Kombinationsfunktion auf die einzelnen Zeilen mit Werten in der Tabelle angewendet wird.


## Syntax

```powerquery
Table.ToList(
    table as table,
    optional combiner as function
) as list
```


## Details

Konvertiert eine Tabelle in eine Liste, indem die angegebene Kombinationsfunktion auf die einzelnen Zeilen mit Werten in der Tabelle angewendet wird.


## Examples

### Example #1 
Kombinieren des Texts jeder Zeile mit einem Komma.
```powerquery
Table.ToList(
    Table.FromRows({
        {Number.ToText(1), "Bob", "123-4567"},
        {Number.ToText(2), "Jim", "987-6543"},
        {Number.ToText(3), "Paul", "543-7890"}
    }),
    Combiner.CombineTextByDelimiter(",")
)
```

Result: 
```powerquery
{"1,Bob,123-4567", "2,Jim,987-6543", "3,Paul,543-7890"}
```




## Category
Table.Conversions
