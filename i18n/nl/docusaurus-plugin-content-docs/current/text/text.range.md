---
title: Text.Range
---

# Text.Range


Retourneert de subtekenreeks die is gevonden bij verschuiving.


## Syntax

```powerquery
Text.Range(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Remarks

Hiermee wordt de subreeks van de tekst `text` geretourneerd die is aangetroffen bij de offset `offset`. Een optionele parameter `count` kan worden opgenomen voor het opgeven van het aantal te retourneren tekens. Hiermee wordt een fout gegenereerd als er niet genoeg tekens zijn.


## Examples

### Example #1
De subtekenreeks in de tekst "Hallo Wereld" opzoeken die begint bij index 6.
```powerquery
Text.Range("Hello World", 6)
```

Result: 
```powerquery
"World"
```


### Example #2
De subtekenreeks in de tekst "Hallo Wereld Hallo" opzoeken die begint bij index 6 en vijf tekens omvat.
```powerquery
Text.Range("Hello World Hello", 6, 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
