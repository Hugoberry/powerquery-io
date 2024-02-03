---
title: Text.AfterDelimiter
---

# Text.AfterDelimiter


## Description

Text.AfterDelimiter


## Syntax

```powerquery
Text.AfterDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Details

Returnerar delen av <code>text</code> efter det angivna <code>delimiter</code>.    En valfri numerisk <code>index</code> indikerar vilken förekomst av <code>delimiter</code> som ska övervägas.    En valfri lista <code>index</code> indikerar vilken förekomst av <code>delimiter</code> som ska övervägas, samt om indexering skall göras från starten eller slutet på indata.


## Examples

### Example #1 
Hämtar delen av &#34;111-222-333&#34; efter det (första) bindestrecket.
```powerquery
Text.AfterDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"222-333"
```


### Example #2 
Hämtar delen av &#34;111-222-333&#34; efter det andra bindestrecket.
```powerquery
Text.AfterDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"333"
```


### Example #3 
Hämtar delen av &#34;111-222-333&#34; efter det andra bindestrecket från slutet.
```powerquery
Text.AfterDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"222-333"
```




## Category
Text.Transformations
