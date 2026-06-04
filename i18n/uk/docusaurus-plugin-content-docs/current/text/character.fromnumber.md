---
title: Character.FromNumber
---

# Character.FromNumber


Перетворює число на текстовий символ.


## Syntax

```powerquery
Character.FromNumber(
    number as number
) as text
```


## Remarks

Повертає символ, еквівалентний числу.  
  
`number` має бути 21-бітною кодовою точкою Юнікоду.


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
Перетворіть шістнадцяткову кодову точку для емограми "усміхнене обличчя" на еквівалентну сурогатну пару UTF-16.
```powerquery
Character.FromNumber(0x1F600)
```

Result: 
```powerquery
"#(0001F600)"
```




## Category
Text.Conversions from and to text
