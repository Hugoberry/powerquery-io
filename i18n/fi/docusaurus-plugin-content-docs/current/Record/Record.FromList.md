---
title: Record.FromList
---

# Record.FromList


## Description

Palauttaa tietueen, kun annetaan luettelo kenttien arvoja ja kenttien joukko.


## Syntax

```powerquery
Record.FromList(
    list as list,
    fields as any
) as record
```


## Details

Palauttaa tietueen, kun annetaan kenttien arvoja (<code>list</code>) ja kenttien joukko.  <code>fields</code> voidaan määrittää joko tekstiarvojen luettelona tai tietuetyyppinä.  Tapahtuu virhe, jos kentät eivät ole yksilöivät.


## Examples

### Example #1 
Muodosta tietue luettelosta kenttien arvoja ja luettelosta kenttien nimiä.
```powerquery
Record.FromList({1, "Bob", "123-4567"}, {"CustomerID", "Name", "Phone"})
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```


### Example #2 
Muodosta tietue luettelosta kenttien arvoja ja tietuetyypistä.
```powerquery
Record.FromList({1, "Bob", "123-4567"}, type [CustomerID = number, Name = text, Phone = number])
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Serialization
