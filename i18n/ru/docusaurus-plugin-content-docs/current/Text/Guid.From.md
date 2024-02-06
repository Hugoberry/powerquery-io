---
title: Guid.From
---

# Guid.From


Возвращает значение GUID из указанного значения.


## Syntax

```powerquery
Guid.From(
    value as text
) as text
```


## Remarks

Возвращает значение <code>Guid.Type</code>, полученное из предоставленного значения <code>value</code>. Если данное <code>value</code> равно <code>NULL</code>, то <code>Guid.From</code> возвращает <code>NULL</code>. Данное <code>value</code> проверяется на соответствие приемлемому формату. Эти форматы приведены в примерах.


## Examples

### Example #1 
Идентификатор GUID может быть представлен в виде 32 шестнадцатеричных цифр, идущих непрерывно.
```powerquery
Guid.From("05FE1DADC8C24F3BA4C2D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #2 
Идентификатор GUID может быть представлен в виде 32 шестнадцатеричных цифр, разделенных дефисами на блоки по 8-4-4-4-12.
```powerquery
Guid.From("05FE1DAD-C8C2-4F3B-A4C2-D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #3 
Идентификатор GUID может быть представлен в виде 32 шестнадцатеричных цифр, разделенных дефисами и заключенных в фигурные скобки.
```powerquery
Guid.From("{05FE1DAD-C8C2-4F3B-A4C2-D194116B4967}")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #4 
Идентификатор GUID может быть представлен в виде 32 шестнадцатеричных цифр, разделенных дефисами и заключенных в круглые скобки.
```powerquery
Guid.From("(05FE1DAD-C8C2-4F3B-A4C2-D194116B4967)")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```




## Category
Text.Conversions from and to text
