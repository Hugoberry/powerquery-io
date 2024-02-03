---
title: Character.ToNumber
---

# Character.ToNumber


## Description

Перетворює символ на числове значення.


## Syntax

```powerquery
Character.ToNumber(
    character as text
) as number
```


## Details

Повертає число, еквівалентне <code>character</code>.<br />    <br />    Результат має бути 21-бітною кодовою точкою Юнікоду, представленою указаним символом або сурогатною парою.  


## Examples

### Example #1 
Перетворіть символ на еквівалентне числове значення.
```powerquery
Character.ToNumber("#(tab)")
```

Result: 
```powerquery
9
```


### Example #2 
Перетворіть сурогатну пару UTF-16 для емограми &#34;усміхнене обличчя&#34; на еквівалентну шістнадцяткову кодову точку.
```powerquery
Number.ToText(Character.ToNumber("#(0001F600)"), "X")
```

Result: 
```powerquery
"1F600"
```




## Category
Text.Conversions from and to text
