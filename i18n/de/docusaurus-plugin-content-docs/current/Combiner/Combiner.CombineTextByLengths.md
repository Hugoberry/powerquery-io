---
title: Combiner.CombineTextByLengths
---

# Combiner.CombineTextByLengths


## Description

Gibt eine Funktion zurück, die eine Liste von Text mit den angegebenen Längen kombiniert.


## Syntax

```powerquery
Combiner.CombineTextByLengths(
    lengths as list,
    optional template as text
) as function
```


## Details

Gibt eine Funktion zurück, die eine Liste von Textwerten unter Verwendung der angegebenen Längen zu einem einzelnen Textwert kombiniert.


## Examples

### Example #1 
Kombinieren Sie eine Liste von Textwerten, indem Sie die angegebene Anzahl von Zeichen aus jedem Eingabewert extrahieren.
```powerquery
Combiner.CombineTextByLengths({1, 2, 3})({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc"
```


### Example #2 
Kombinieren Sie eine Liste von Textwerten, indem Sie die angegebene Anzahl von Zeichen extrahieren, nachdem Sie das Ergebnis zuerst mit dem Vorlagentext ausgefüllt haben.
```powerquery
Combiner.CombineTextByLengths({1, 2, 3}, "*********")({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc***"
```




## Category
Combiner
