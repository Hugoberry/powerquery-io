---
title: Type.RecordFields
---

# Type.RecordFields


## Description

Palauttaa tietueen, joka kuvaa tietuetyypin kentät niin, että palautetun tietuetyypin kullakin kentällä on vastaava nimi ja arvo.


## Syntax

```powerquery
Type.RecordFields(
    type as type
) as record
```


## Details

Palauttaa tietueen, joka kuvaa tietueen <code>type</code> kentät. Jokaisella palautetun tietuetyypin kentällä on vastaava nimi ja arvo muodossa <code>[ Type = type, Optional = logical ]</code>.


## Examples

### Example #1 
Etsi tietueen &lt;code&gt;[ A = number, optional B = any]&lt;/code&gt; nimi ja arvo.
```powerquery
Type.RecordFields(type [A = number, optional B = any])
```

Result: 
```powerquery
[
    A = [Type = type number, Optional = false],
    B = [Type = type any, Optional = true]
]
```




## Category
Type
