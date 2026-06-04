---
title: Record.FieldOrDefault
---

# Record.FieldOrDefault


Palauttaa tietueen määritetyn kentän arvon tai oletusarvon, jos kenttää ei löydy.


## Syntax

```powerquery
Record.FieldOrDefault(
    record as record,
    field as text,
    optional defaultValue as any
) as any
```


## Remarks

Palauttaa tietueen `record` määritetyn kentän `field` arvon. Jos kenttää ei löydy, palautetaan valinnainen `defaultValue`.


## Examples

### Example #1
Selvitä kentän "Phone" arvo tietueessa tai palauta tyhjäarvo, jos sitä ei ole olemassa.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone")
```

Result: 
```powerquery
null
```


### Example #2
Selvitä kentän "Phone" arvo tietueessa tai palauta oletusarvo, jos sitä ei ole olemassa.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone", "123-4567")
```

Result: 
```powerquery
"123-4567"
```




## Category
Record.Selection
