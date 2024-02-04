---
title: Table.MatchesAllRows
---

# Table.MatchesAllRows


## Description

Gibt an, ob alle Zeilen in der Tabelle die angegebene Bedingung erfüllen.


## Syntax

```powerquery
Table.MatchesAllRows(
    table as table,
    condition as function
) as logical
```


## Details

Gibt an, ob alle Zeilen im Element vom Typ "<code>table</code>" die Angabe "<code>condition</code>" erfüllen. Gibt <code>true</code> zurück, falls alle Zeilen die Bedingung erfüllen. Andernfalls wird <code>false</code> zurückgegeben.


## Examples

### Example #1 
Ermittelt, ob es sich bei allen Zeilenwerten in der Spalte &#34;[a]&#34; der Tabelle um gerade Werte handelt.
```powerquery
Table.MatchesAllRows(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8]
    }),
    each Number.Mod([a], 2) = 0
)
```

Result: 
```powerquery
true
```


### Example #2 
Ermittelt, ob es sich bei allen Zeilenwerten der Tabelle &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; um &#34;[a = 1, b = 2]&#34; handelt.
```powerquery
Table.MatchesAllRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = -3, b = 4]
    }),
    each _ = [a = 1, b = 2]
)
```

Result: 
```powerquery
false
```




## Category
Table.Row operations
