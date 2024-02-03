---
title: Text.Contains
---

# Text.Contains


## Description

Повертає, чи міститься підрядок у тексті.


## Syntax

```powerquery
Text.Contains(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

Виявляє, чи містить "<code>text</code>" значення "<code>substring</code>". Якщо його знайдено, повертає результат true. Ця функція не підтримує символи узагальнення та регулярні вирази.      <br />      <br />      Щоб указати порівняння без урахування регістра або з огляду на культуру й локалізацію, можна задати додатковий аргумент <code>comparer</code>.      Мова формул передбачає такі вбудовані засоби порівняння.      <ul>        <li><code>Comparer.Ordinal</code> – слугує для порядкового порівняння з урахуванням регістра.</li>        <li><code>Comparer.OrdinalIgnoreCase</code> – виконує порядкове порівняння без урахування регістра.</li>        <li> <code>Comparer.FromCulture</code> – виконує порівняння з огляду на культуру.</li>      </ul>


## Examples

### Example #1 
Визначити, чи міститься текст &#34;Hello&#34; у тексті &#34;Hello World&#34;.
```powerquery
Text.Contains("Hello World", "Hello")
```

Result: 
```powerquery
true
```


### Example #2 
Визначити, чи міститься текст &#34;hello&#34; у тексті &#34;Hello World&#34;.
```powerquery
Text.Contains("Hello World", "hello")
```

Result: 
```powerquery
false
```


### Example #3 
Пошук слова &#34;hello&#34; в тексті &#34;Hello World&#34; за допомогою засобу порівняння, що не враховує регістр.
```powerquery
Text.Contains("Hello World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership
