---
title: Character.FromNumber
---

# Character.FromNumber


## Description

Pretvori število v besedilni znak.


## Syntax

```powerquery
Character.FromNumber(
    number as number
) as text
```


## Details

Vrne znak, ki je enakovreden številu.<br />    <br />    Navedeni element <code>number</code> mora biti 21-bitna kodna točka Unicode.


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
Pretvorite šestnajstiško kodno točko za čustveni simbol &#34;režeči se obraz&#34; v ustrezni nadomestni par UTF-16.
```powerquery
Character.FromNumber(0x1F600)
```

Result: 
```powerquery
"#(0001F600)"
```




## Category
Text.Conversions from and to text
