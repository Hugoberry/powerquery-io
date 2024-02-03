---
title: Table.First
---

# Table.First


## Description

Vráti prvý riadok alebo stanovenú predvolenú hodnotu.


## Syntax

```powerquery
Table.First(
    table as table,
    optional default as any
) as any
```


## Details

Vráti prvý riadok tabuľky <code>table</code> alebo voliteľnú predvolenú hodnotu <code>default</code>, ak je tabuľka prázdna.


## Examples

### Example #1 
Nájdite prvý riadok tabuľky.
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
Nájdite prvý riadok tabuľky &lt;code&gt;(\{})&lt;/code&gt; alebo vráťte hodnotu [a = 0, b = 0], ak je tabuľka prázdna.
```powerquery
Table.First(Table.FromRecords({}), [a = 0, b = 0])
```

Result: 
```powerquery
[a = 0, b = 0]
```




## Category
Table.Row operations
