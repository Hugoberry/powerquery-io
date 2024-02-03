---
title: Number.Round
---

# Number.Round


## Description

Повертає округлене число. Можна вказати кількість цифр і метод округлення.


## Syntax

```powerquery
Number.Round(
    number as number,
    optional digits as number,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Повертає результат округлення <code>number</code> до найближчого числа. Якщо <code>number</code> має Null-значення, <code>Number.Round</code> повертає нуль.<br />      <br />      За замовчуванням <code>number</code> округлюється до найближчого цілого числа, а неоднозначність усувається шляхом округлення до найближчого парного числа (за допомогою функції <code>RoundingMode.ToEven</code>, що також відомо як банківське округлення).<br />      <br />      Проте наведені далі додаткові параметри можуть перезаписувати ці параметри за замовчуванням.      <ul>        <li><code>digits</code> – округлює <code>number</code> до вказаної кількості десяткових розрядів.</li>        <li><code>roundingMode</code> – змінює поведінку усунення неоднозначностей за замовчуванням, коли <code>number</code> відповідає середній точці в проміжку між двома потенційними округленими значеннями      (можливі значення див. за <code>RoundingMode.Type</code>).</li>       </ul>


## Examples

### Example #1 
Округлити 1,234 до найближчого цілого числа.
```powerquery
Number.Round(1.234)
```

Result: 
```powerquery
1
```


### Example #2 
Округлити 1,56 до найближчого цілого числа.
```powerquery
Number.Round(1.56)
```

Result: 
```powerquery
2
```


### Example #3 
Округлити 1,2345 до двох знаків після коми.
```powerquery
Number.Round(1.2345, 2)
```

Result: 
```powerquery
1.23
```


### Example #4 
Округлити 1,2345 до трьох знаків після коми (Округлення в більшу сторону).
```powerquery
Number.Round(1.2345, 3, RoundingMode.Up)
```

Result: 
```powerquery
1.235
```


### Example #5 
Округлити 1,2345 до трьох знаків після коми (Округлення в меншу сторону).
```powerquery
Number.Round(1.2345, 3, RoundingMode.Down)
```

Result: 
```powerquery
1.234
```




## Category
Number.Rounding
