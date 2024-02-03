---
title: Character.FromNumber
---

# Character.FromNumber


## Description

Converteert een getal naar tekst.


## Syntax

```powerquery
Character.FromNumber(
    number as number
) as text
```


## Details

Retourneert het tekenequivalent van het getal.<br />    <br />    De opgegeven <code>number</code> moet een 21-bits Unicode-codepunt zijn.


## Examples

### Example #1 
Een getal naar de equivalente tekenwaarde converteren.
```powerquery
Character.FromNumber(9)
```

Result: 
```powerquery
"#(tab)"
```


### Example #2 
Een teken naar een getal converteren en weer terug.
```powerquery
Character.FromNumber(Character.ToNumber("A"))
```

Result: 
```powerquery
"A"
```


### Example #3 
Het hexadecimale codepunt voor de emoticon &#39;grijnzend gezicht&#39; converteren naar het bijbehorende UTF-16-surrogaatpaar.
```powerquery
Character.FromNumber(0x1F600)
```

Result: 
```powerquery
"#(0001F600)"
```




## Category
Text.Conversions from and to text
