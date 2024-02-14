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

Returnerer andelen af <code>text</code> før den angivne <code>delimiter</code>.    En valgfri numerisk værdi, <code>index</code>, angiver, hvilken forekomst af <code>delimiter</code> der skal tages i betragtning.    En valgfri liste, <code>index</code>, angiver, hvilken forekomst af <code>delimiter</code> der skal tages i betragtning, samt om indeksering skal foretages fra starten eller slutningen af inputtet.


## Examples

### Example #1 
Hent andelen af &#34;111-222-333&#34; før den første bindestreg.
```powerquery
Text.BeforeDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"111"
```


### Example #2 
Hent andelen af &#34;111-222-333&#34; før den anden bindestreg.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"111-222"
```


### Example #3 
Hent andelen af &#34;111-222-333&#34; før den anden bindestreg regnet fra slutningen.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"111"
```




## Category
Text.Transformations
