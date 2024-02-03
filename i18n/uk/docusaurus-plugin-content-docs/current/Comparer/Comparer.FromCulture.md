---
title: Comparer.FromCulture
---

# Comparer.FromCulture


## Description

Повертає функцію засобу порівняння на основі вказаної культури та з урахуванням регістра.


## Syntax

```powerquery
Comparer.FromCulture(
    culture as text,
    optional ignoreCase as logical
) as function
```


## Details

Повертає функцію засобу порівняння, яка використовує <code>culture</code>, та чутливість до регістру, визначену <code>ignoreCase</code>, для виконання порівнянь.<br />      <br /> Функція засобу порівняння приймає два аргументи та повертає -1, 0 або 1 залежно від того, чи перше значення менше, дорівнює або більше за друге.<br /> <br /> Стандартне значення <code>ignoreCase</code> має значення false. <code>culture</code> має бути однією з локалізацій, що підтримуються .NET Framework (наприклад, "en-US").    


## Examples

### Example #1 
Порівняти &#34;a&#34; та &#34;A&#34; за допомогою локалізації &#34;en-US&#34;, щоб визначити, чи значення однакові.
```powerquery
Comparer.FromCulture("en-US")("a", "A")
```

Result: 
```powerquery
-1
```


### Example #2 
Порівняти &#34;a&#34; та &#34;A&#34; за допомогою локалізації &#34;en-US&#34; без урахування регістра, щоб визначити, чи значення однакові.
```powerquery
Comparer.FromCulture("en-US", true)("a", "A")
```

Result: 
```powerquery
0
```




## Category
Comparer
