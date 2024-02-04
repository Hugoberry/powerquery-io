---
title: Text.Range
---

# Text.Range


## Description

Gibt die am Offset gefundene Teilzeichenfolge zurück.


## Syntax

```powerquery
Text.Range(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Details

Gibt die am Offset <code>offset</code> gefundene Teilzeichenfolge aus dem Text "<code>text</code>" zurück.    Mithilfe eines optionalen Parameters (<code>count</code>) kann die Anzahl der zurückzugebenden Zeichen angegeben werden. Löst einen Fehler aus, wenn nicht genug Zeichen vorhanden sind.


## Examples

### Example #1 
Ermittelt die Teilzeichenfolge aus dem Text &#34;Hello World&#34;, die bei Index 6 beginnt.
```powerquery
Text.Range("Hello World", 6)
```

Result: 
```powerquery
"World"
```


### Example #2 
Ermittelt die Teilzeichenfolge aus dem Text &#34;Hello World Hello&#34;, die bei Index 6 beginnt und fünf Zeichen umfasst.
```powerquery
Text.Range("Hello World Hello", 6, 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
