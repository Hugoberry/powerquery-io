---
title: Table.Last
---

# Table.Last


## Description

Gibt die letzte Zeile oder einen angegebenen Standardwert zurück.


## Syntax

```powerquery
Table.Last(
    table as table,
    optional default as any
) as any
```


## Details

Gibt die letzte Zeile des Elements vom Typ "<code>table</code>" zurück. Ist die Tabelle leer, wird ein optionaler Standardwert (<code>default</code>) zurückgegeben.


## Examples

### Example #1 
Ermittelt die letzte Zeile der Tabelle.
```powerquery
Table.Last(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
[CustomerID = 3, Name = "Paul", Phone = "543-7890"]
```


### Example #2 
Ermittelt die letzte Zeile der Tabelle &lt;code&gt;(\{})&lt;/code&gt; oder gibt &#34;[a = 0, b = 0]&#34; zurück, falls die Tabelle leer ist.
```powerquery
Table.Last(Table.FromRecords({}), [a = 0, b = 0])
```

Result: 
```powerquery
[a = 0, b = 0]
```




## Category
Table.Row operations
