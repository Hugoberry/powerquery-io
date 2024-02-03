---
title: Table.FromValue
---

# Table.FromValue


## Description

Luo taulukon, jossa on sarake annetuista arvoista.


## Syntax

```powerquery
Table.FromValue(
    value as any,
    optional options as record
) as table
```


## Details

Luo taulukon, jonka sarake sisältää annetun arvon tai arvoluettelon <code>value</code>. Valinnainen tietueparametri <code>options</code> voidaan määrittää ohjaamaan seuraavia asetuksia:    <ul>    <li> <code>DefaultColumnName</code> : sarakkeen nimi, jota käytetään muodostettaessa taulukko skalaariarvojen luettelosta.</li>    </ul>  


## Examples

### Example #1 
Luo taulukko arvosta 1.
```powerquery
Table.FromValue(1)
```

Result: 
```powerquery
Table.FromRecords({[Value = 1]})
```


### Example #2 
Luo taulukko luettelosta.
```powerquery
Table.FromValue({1, "Bob", "123-4567"})
```

Result: 
```powerquery
Table.FromRecords({
    [Value = 1],
    [Value = "Bob"],
    [Value = "123-4567"]
})
```


### Example #3 
Luo taulukko arvosta 1 käyttäen mukautettua sarakkeen nimeä.
```powerquery
Table.FromValue(1, [DefaultColumnName = "MyValue"])
```

Result: 
```powerquery
Table.FromRecords({[MyValue = 1]})
```




## Category
Table.Table construction
