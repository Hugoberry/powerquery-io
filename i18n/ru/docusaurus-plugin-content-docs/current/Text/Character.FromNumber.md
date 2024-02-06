---
title: Character.FromNumber
---

# Character.FromNumber


Преобразует число в текстовый символ.


## Syntax

```powerquery
Character.FromNumber(
    number as number
) as text
```


## Remarks

Возвращает символ, эквивалентный числу.<br />    <br />    Указанное значение <code>number</code> должно представлять собой 21-разрядную кодовую точку Unicode.


## Examples

### Example #1 
Преобразование числа в эквивалентное символьное значение.
```powerquery
Character.FromNumber(9)
```

Result: 
```powerquery
"#(tab)"
```


### Example #2 
Преобразование символа в число и обратно.
```powerquery
Character.FromNumber(Character.ToNumber("A"))
```

Result: 
```powerquery
"A"
```


### Example #3 
Преобразование шестнадцатеричной кодовой точки для смайлика &#34;ухмыляющееся лицо&#34; в эквивалентную суррогатную пару UTF-16.
```powerquery
Character.FromNumber(0x1F600)
```

Result: 
```powerquery
"#(0001F600)"
```




## Category
Text.Conversions from and to text
