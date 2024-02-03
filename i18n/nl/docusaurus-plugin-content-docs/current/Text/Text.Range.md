---
title: Text.Range
---

# Text.Range


## Description

Retourneert de subtekenreeks die is gevonden bij verschuiving.


## Syntax

```powerquery
Text.Range(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Details

Hiermee wordt de subreeks van de tekst <code>text</code> geretourneerd die is aangetroffen bij de offset <code>offset</code>. Een optionele parameter, <code>count</code>, kan worden opgenomen voor het opgeven van het aantal te retourneren tekens. Retourneert een fout als er onvoldoende tekens zijn.


## Examples

### Example #1 
De subtekenreeks in de tekst &#34;Hallo Wereld&#34; opzoeken die begint bij index 6.
```powerquery
Text.Range("Hello World", 6)
```

Result: 
```powerquery
"World"
```


### Example #2 
De subtekenreeks in de tekst &#34;Hallo Wereld Hallo&#34; opzoeken die begint bij index 6 en vijf tekens omvat.
```powerquery
Text.Range("Hello World Hello", 6, 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
