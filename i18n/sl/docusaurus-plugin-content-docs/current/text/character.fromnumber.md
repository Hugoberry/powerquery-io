---
title: Character.FromNumber
---

# Character.FromNumber


Pretvori število v besedilni znak.


## Syntax

```powerquery
Character.FromNumber(
    number as number
) as text
```


## Remarks

Vrne znak, ki je enakovreden številu.  
  
Navedeni element `number` mora biti 21-bitna kodna točka Unicode.


## Examples

### Example #1
Pretvori število v enakovredno znakovno vrednost.
```powerquery
Character.FromNumber(9)
```

Result: 
```powerquery
"#(tab)"
```


### Example #2
Pretvorite znak v število in nato znova nazaj.
```powerquery
Character.FromNumber(Character.ToNumber("A"))
```

Result: 
```powerquery
"A"
```


### Example #3
Pretvorite šestnajstiško kodno točko za čustveni simbol"režeči se obraz"v ustrezni nadomestni par UTF-16.
```powerquery
Character.FromNumber(0x1F600)
```

Result: 
```powerquery
"#(0001F600)"
```




## Category
Text.Conversions from and to text
