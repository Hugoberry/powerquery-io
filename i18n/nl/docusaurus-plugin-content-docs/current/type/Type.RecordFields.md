---
title: Type.RecordFields
---

# Type.RecordFields


Retourneert een record waarin de velden van een recordtype worden beschreven en waarbij elk veld van het geretourneerde recordtype een corresponderende naam en waarde heeft.


## Syntax

```powerquery
Type.RecordFields(
    type as type
) as record
```


## Remarks

Retourneert een record waarin de velden van een record <code>type</code> worden beschreven. Elk veld van het geretourneerde recordtype heeft een corresponderende naam en waarde, in de vorm van een record <code>[ Type = type, Optioneel = logische waarde ]</code>.


## Examples

### Example #1 
Zoek de naam en waarde van de record &lt;code&gt;[ A = getal, optioneel B = willekeurig]&lt;/code&gt;.
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
