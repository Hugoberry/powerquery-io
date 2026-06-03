---
title: Text.Range
---

# Text.Range


Gibt die am Offset gefundene Teilzeichenfolge zurück.


## Syntax

```powerquery
Text.Range(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Remarks

Gibt den am Offset `text` gefundenen Substring aus dem Text „`offset`“ zurück. Mithilfe eines optionalen Parameters (`count`) kann die Anzahl der zurückzugebenden Zeichen angegeben werden. Löst einen Fehler aus, wenn nicht genügend Zeichen vorhanden sind.


## Examples

### Example #1
Ermittelt die Teilzeichenfolge aus dem Text "Hello World", die bei Index 6 beginnt.
```powerquery
Text.Range("Hello World", 6)
```

Result: 
```powerquery
"World"
```


### Example #2
Ermittelt die Teilzeichenfolge aus dem Text "Hello World Hello", die bei Index 6 beginnt und fünf Zeichen umfasst.
```powerquery
Text.Range("Hello World Hello", 6, 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
