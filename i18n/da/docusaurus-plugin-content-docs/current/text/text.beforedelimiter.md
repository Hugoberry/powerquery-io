---
title: Text.BeforeDelimiter
---

# Text.BeforeDelimiter


Text.BeforeDelimiter


## Syntax

```powerquery
Text.BeforeDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Remarks

Returnerer andelen af `text` før den angivne `delimiter`. En valgfri numerisk værdi, `index`, angiver, hvilken forekomst af `delimiter` der skal tages i betragtning. En valgfri liste, `index`, angiver, hvilken forekomst af `delimiter` der skal tages i betragtning, samt om indeksering skal foretages fra starten eller slutningen af inputtet.


## Examples

### Example #1
Hent andelen af "111-222-333" før den første bindestreg.
```powerquery
Text.BeforeDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"111"
```


### Example #2
Hent andelen af "111-222-333" før den anden bindestreg.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"111-222"
```


### Example #3
Hent andelen af "111-222-333" før den anden bindestreg regnet fra slutningen.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"111"
```




## Category
Text.Transformations
