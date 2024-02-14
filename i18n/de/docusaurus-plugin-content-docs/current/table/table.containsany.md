---
title: Table.ContainsAny
---

# Table.ContainsAny


Gibt an, ob mindestens einer der angegebenen Datensätze als Zeile in der Tabelle vorkommt.


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Gibt an, ob mindestens einer der angegebenen Datensätze in der Liste mit Datensätzen (<code>rows</code>) als Zeile in "<code>table</code>" vorkommt.    Der Vergleich zwischen den Zeilen der Tabelle kann mithilfe eines optionalen Parameters (<code>equationCriteria</code>) gesteuert werden.


## Examples

### Example #1 
Ermittelt, ob die Tabelle &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; die Zeile &lt;code&gt;[a = 1, b = 2]&lt;/code&gt; oder &lt;code&gt;[a = 3, b = 5]&lt;/code&gt; enthält.
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 2],
        [a = 3, b = 5]
    }
)
```

Result: 
```powerquery
true
```


### Example #2 
Ermittelt, ob die Tabelle &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; die Zeile &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; oder &lt;code&gt;[a = 3, b = 5]&lt;/code&gt; enthält.
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 3],
        [a = 3, b = 5]
    }
)
```

Result: 
```powerquery
false
```


### Example #3 
Ermittelt, ob die Tabelle &lt;code&gt;(Table.FromRecords(\{[a = 1, b = 2], [a = 3, b = 4]}))&lt;/code&gt; die Zeile &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; oder &lt;code&gt;[a = 3, b = 5]&lt;/code&gt; enthält, wobei lediglich die Spalte &#34;[a]&#34; verglichen wird.
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 3],
        [a = 3, b = 5]
    },
    "a"
)
```

Result: 
```powerquery
true
```




## Category
Table.Membership
