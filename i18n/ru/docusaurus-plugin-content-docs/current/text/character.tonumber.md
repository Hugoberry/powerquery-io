---
title: Character.ToNumber
---

# Character.ToNumber


Преобразует символ в числовое значение.


## Syntax

```powerquery
Character.ToNumber(
    character as text
) as number
```


## Remarks

Возвращает число, эквивалентное `character`.  
  
Результатом будет 21-разрядная кодовая точка Unicode, представленная указанным символом или суррогатной парой.


## Examples

### Example #1
Преобразование символа в эквивалентное числовое значение.
```powerquery
Character.ToNumber("#(tab)")
```

Result: 
```powerquery
9
```


### Example #2
Преобразование суррогатной пары UTF-16 для смайлика "ухмыляющееся лицо" в эквивалентную шестнадцатеричную кодовую точку.
```powerquery
Number.ToText(Character.ToNumber("#(0001F600)"), "X")
```

Result: 
```powerquery
"1F600"
```




## Category
Text.Conversions from and to text
