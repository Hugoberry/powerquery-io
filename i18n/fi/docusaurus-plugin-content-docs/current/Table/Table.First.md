---
title: Table.First
---

# Table.First


## Description

Palauttaa ensimmäisen rivin tai määritetyn oletusarvon.


## Syntax

```powerquery
Table.First(
    table as table,
    optional default as any
) as any
```


## Details

Palauttaa kohteen <code>table</code> ensimmäisen rivin tai valinnaisen oletusarvon <code>default</code>, jos taulukko on tyhjä.


## Examples

### Example #1 
Etsi taulukon ensimmäinen rivi.
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
Etsi taulukon &lt;code&gt;(\{})&lt;/code&gt; ensimmäinen rivi tai palauta [a = 0, b = 0], jos se on tyhjä.
```powerquery
Table.First(Table.FromRecords({}), [a = 0, b = 0])
```

Result: 
```powerquery
[a = 0, b = 0]
```




## Category
Table.Row operations
