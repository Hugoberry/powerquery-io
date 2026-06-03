---
title: Character.FromNumber
---

# Character.FromNumber


Converteert een getal naar tekst.


## Syntax

```powerquery
Character.FromNumber(
    number as number
) as text
```


## Remarks

Retourneert het tekenequivalent van het getal.  
  
De opgegeven `number` moet een 21-bits Unicode-codepunt zijn.


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
Het hexadecimale codepunt voor de emoticon 'grijnzend gezicht' converteren naar het bijbehorende UTF-16-surrogaatpaar.
```powerquery
Character.FromNumber(0x1F600)
```

Result: 
```powerquery
"#(0001F600)"
```




## Category
Text.Conversions from and to text
