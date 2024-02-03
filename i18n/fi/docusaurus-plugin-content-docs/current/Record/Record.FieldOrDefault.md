---
title: Record.FieldOrDefault
---

# Record.FieldOrDefault


## Description

Palauttaa tietueen määritetyn kentän arvon tai oletusarvon, jos kenttää ei löydy.


## Syntax

```powerquery
Record.FieldOrDefault(
    record as record,
    field as text,
    optional defaultValue as any
) as any
```


## Details

Palauttaa tietueen <code>record</code> määritetyn kentän <code>field</code> arvon. Jos kenttää ei löydy, palautetaan valinnainen <code>defaultValue</code>.


## Examples

### Example #1 
Selvitä kentän &#34;Phone&#34; arvo tietueessa tai palauta tyhjäarvo, jos sitä ei ole olemassa.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone")
```

Result: 
```powerquery
null
```


### Example #2 
Selvitä kentän &#34;Phone&#34; arvo tietueessa tai palauta oletusarvo, jos sitä ei ole olemassa.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone", "123-4567")
```

Result: 
```powerquery
"123-4567"
```




## Category
Record.Selection
