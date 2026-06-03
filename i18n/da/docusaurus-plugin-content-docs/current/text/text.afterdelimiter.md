---
title: Text.AfterDelimiter
---

# Text.AfterDelimiter


Text.AfterDelimiter


## Syntax

```powerquery
Text.AfterDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Remarks

Returnerer andelen af `text` efter den angivne `delimiter`. En valgfri numerisk værdi, `index`, angiver, hvilken forekomst af `delimiter` der skal tages i betragtning. En valgfri liste, `index`, angiver, hvilken forekomst af `delimiter` der skal tages i betragtning, samt om indeksering skal foretages fra starten eller slutningen af inputtet.


## Examples

### Example #1
Hent andelen af "111-222-333" efter den første bindestreg.
```powerquery
Text.AfterDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"222-333"
```


### Example #2
Hent andelen af "111-222-333" efter den anden bindestreg.
```powerquery
Text.AfterDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"333"
```


### Example #3
Hent andelen af "111-222-333" efter den anden bindestreg regnet fra slutningen.
```powerquery
Text.AfterDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"222-333"
```




## Category
Text.Transformations
