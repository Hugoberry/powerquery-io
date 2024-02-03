---
title: Character.FromNumber
---

# Character.FromNumber


## Description

Перетворює число на текстовий символ.


## Syntax

```powerquery
Character.FromNumber(
    number as number
) as text
```


## Details

Повертає символ, еквівалентний числу.<br />    <br />    <code>number</code> має бути 21-бітною кодовою точкою Юнікоду.


## Examples

### Example #1 
Перетворіть число на еквівалентне значення символу.
```powerquery
Character.FromNumber(9)
```

Result: 
```powerquery
"#(tab)"
```


### Example #2 
Перетворіть символ на число, а потім назад.
```powerquery
Character.FromNumber(Character.ToNumber("A"))
```

Result: 
```powerquery
"A"
```


### Example #3 
Перетворіть шістнадцяткову кодову точку для емограми &#34;усміхнене обличчя&#34; на еквівалентну сурогатну пару UTF-16.
```powerquery
Character.FromNumber(0x1F600)
```

Result: 
```powerquery
"#(0001F600)"
```




## Category
Text.Conversions from and to text
