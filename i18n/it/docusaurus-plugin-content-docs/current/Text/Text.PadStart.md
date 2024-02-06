---
title: Text.PadStart
---

# Text.PadStart


Restituisce il testo della lunghezza specificata riempiendo l&#39;inizio del testo specificato.


## Syntax

```powerquery
Text.PadStart(
    text as text,
    count as number,
    optional character as text
) as text
```


## Remarks

Restituisce il valore <code>text</code> riempito fino al raggiungimento della lunghezza <code>count</code> inserendo spazi all'inizio del valore di testo <code>text</code>.    Facoltativamente, è possibile usare il carattere <code>character</code> per specificare il carattere usato per il riempimento. Il carattere di riempimento predefinito è uno spazio.


## Examples

### Example #1 
Riempire l&#39;inizio di un valore di testo in modo da raggiungere la lunghezza di 10 caratteri.
```powerquery
Text.PadStart("Name", 10)
```

Result: 
```powerquery
"      Name"
```


### Example #2 
Riempire l&#39;inizio di un valore di testo con &#34;|&#34; in modo da raggiungere la lunghezza di 10 caratteri.
```powerquery
Text.PadStart("Name", 10, "|")
```

Result: 
```powerquery
"||||||Name"
```




## Category
Text.Transformations
