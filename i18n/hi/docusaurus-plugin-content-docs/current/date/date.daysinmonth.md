---
title: Date.DaysInMonth
---

# Date.DaysInMonth


28 से 31 तक की संख्या लौटाता है जो महीने के दिनों की संख्या को इंगित करती है.


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Remarks

महीने के दिनों की संख्या को `तिथि`, `datetime` या `datetimezone` मान `dateTime` में लौटाता है.

-   `dateTime`: एक ऐसा `तिथि`, `datetime` या `datetimezone` मान, जिसके लिए महीने के दिनों की संख्या लौटाई जाती है.


## Examples

### Example #1
`#date(2011, 12, 01)` द्वारा प्रस्तुत किए गए अनुसार दिसंबर माह के दिनों की संख्या.
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date
