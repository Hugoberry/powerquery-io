---
title: Record.FieldOrDefault
---

# Record.FieldOrDefault


## Description

Vrne vrednost navedenega polja v zapisu ali privzeto vrednost, če polja ni mogoče najti.


## Syntax

```powerquery
Record.FieldOrDefault(
    record as record,
    field as text,
    optional defaultValue as any
) as any
```


## Details

Vrne vrednost navedenega polja <code>field</code> v zapisu <code>record</code>. Če polja ni mogoče najti, je vrnjena izbirna vrednost <code>defaultValue</code>.


## Examples

### Example #1 
Poiščite vrednost polja &#34;Telefon&#34; v zapisu ali vrnite ničelno vrednost, če ne obstaja.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone")
```

Result: 
```powerquery
null
```


### Example #2 
Poiščite vrednost polja &#34;Telefon&#34; v zapisu ali vrnite privzeto vrednost, če ne obstaja.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone", "123-4567")
```

Result: 
```powerquery
"123-4567"
```




## Category
Record.Selection
