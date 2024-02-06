---
title: Table.First
---

# Table.First


Gibt die erste Zeile oder einen angegebenen Standardwert zurück.


## Syntax

```powerquery
Table.First(
    table as table,
    optional default as any
) as any
```


## Remarks

Gibt die erste Zeile des Elements vom Typ "<code>table</code>" zurück. Ist die Tabelle leer, wird ein optionaler Standardwert (<code>default</code>) zurückgegeben.


## Examples

### Example #1 
Ermittelt die erste Zeile der Tabelle.
```powerquery
Table.First(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```


### Example #2 
Ermittelt die erste Zeile der Tabelle &lt;code&gt;(\{})&lt;/code&gt; oder gibt &#34;[a = 0, b = 0]&#34; zurück, falls die Tabelle leer ist.
```powerquery
Table.First(Table.FromRecords({}), [a = 0, b = 0])
```

Result: 
```powerquery
[a = 0, b = 0]
```




## Category
Table.Row operations
