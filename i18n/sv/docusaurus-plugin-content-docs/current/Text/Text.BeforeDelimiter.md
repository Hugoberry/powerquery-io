---
title: Text.BeforeDelimiter
---

# Text.BeforeDelimiter


## Description

Text.BeforeDelimiter


## Syntax

```powerquery
Text.BeforeDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Details

Returnerar delen av <code>text</code> innan det angivna <code>delimiter</code>.    En valfri numerisk <code>index</code> indikerar vilken förekomst av <code>delimiter</code> som ska övervägas.    En valfri lista <code>index</code> indikerar vilken förekomst av <code>delimiter</code> som ska övervägas, samt om indexering skall göras från starten eller slutet av indata.


## Examples

### Example #1 
Hämtar delen av &#34;111-222-333&#34; före det (första) bindestrecket.
```powerquery
Text.BeforeDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"111"
```


### Example #2 
Hämtar delen av &#34;111-222-333&#34; före det andra bindestrecket.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"111-222"
```


### Example #3 
Hämtar delen av &#34;111-222-333&#34; före det andra bindestrecket från slutet.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"111"
```




## Category
Text.Transformations
